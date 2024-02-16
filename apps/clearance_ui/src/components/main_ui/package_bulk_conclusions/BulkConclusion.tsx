// SPDX-FileCopyrightText: 2024 Double Open Oy
//
// SPDX-License-Identifier: MIT

import React from "react";
import { ZodiosResponseByAlias } from "@zodios/core";
import { userAPI } from "validation-helpers";
import { userHooks } from "@/hooks/zodiosHooks";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import DeleteBulkConclusion from "@/components/common/delete_item/DeleteBulkConclusion";
import EditButton from "@/components/common/edit_item/EditButton";

type BulkConclusion = ZodiosResponseByAlias<
    typeof userAPI,
    "GetBulkConclusionsByPurl"
>["bulkConclusions"][0];

type Props = {
    pathPurl: string;
    bulkConclusion: BulkConclusion;
    userName: string;
    userRole: string;
    editHandler: (id: number) => void;
};

const BulkConclusion = ({
    pathPurl,
    bulkConclusion,
    userName,
    userRole,
    editHandler,
}: Props) => {
    // Fetch the package file tree data
    const { data: fileTreeData } = userHooks.useGetFileTree({
        withCredentials: true,
        params: {
            purl: pathPurl,
        },
    });
    const paths =
        fileTreeData?.filetrees.map((filetree) => filetree.path) || [];

    return (
        <div
            className="hover:bg-muted m-2 flex items-stretch justify-between rounded-lg border p-2"
            data-testid="bulk-conclusion"
        >
            <div className="mr-1 flex-1 items-start text-left">
                <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">
                            {
                                new Date(bulkConclusion.updatedAt)
                                    .toISOString()
                                    .split("T")[0]
                            }
                        </span>
                        <span className="rounded-sm bg-orange-400 p-1 text-xs font-semibold">
                            {bulkConclusion.user.username}
                        </span>
                    </div>
                    <div className="text-xs">
                        <span className="mr-1 font-semibold">Concluded:</span>
                        <span className="rounded-sm bg-slate-200 dark:bg-slate-600">
                            {bulkConclusion.concludedLicenseExpressionSPDX}
                        </span>
                    </div>
                    <div className="text-xs">
                        <span className="mr-1 font-semibold">Pattern:</span>
                        <span className="break-all">
                            {bulkConclusion.pattern}
                        </span>
                    </div>
                    <div className="text-muted-foreground text-xs">
                        <span className="mr-1 font-semibold">Comment:</span>
                        <span className="italic">{bulkConclusion.comment}</span>
                    </div>
                    <div className="text-xs">
                        <span className="mr-1 font-semibold">
                            Files affected in this package:
                        </span>
                        <span>
                            <Badge className="bg-blue-400 p-0.5 font-bold">
                                {paths.length}
                            </Badge>
                        </span>
                    </div>
                    {bulkConclusion.local && (
                        <span>
                            <Badge className="bg-red-400 p-0.5 font-bold">
                                LOCAL
                            </Badge>
                        </span>
                    )}
                </div>
            </div>
            <div className="flex pl-1">
                {(userName === bulkConclusion.user.username ||
                    userRole === "ADMIN") && (
                    <div className="flex items-center">
                        <Separator orientation="vertical" className="w-[2px]" />
                        <EditButton
                            name="edit"
                            className="ml-2 mr-1 px-2"
                            onClick={() => editHandler(bulkConclusion.id)}
                        />
                        <DeleteBulkConclusion id={bulkConclusion.id} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BulkConclusion;
