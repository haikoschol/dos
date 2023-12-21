// SPDX-FileCopyrightText: 2023 HH Partners
//
// SPDX-License-Identifier: MIT

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { userHooks } from "@/hooks/zodiosHooks";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import ButtonGroup from "@/components/file_inspector/ButtonGroup";
import CodeEditor from "@/components/file_inspector/CodeEditor";
import CurationForm from "@/components/license_conclusions/CurationForm";
import { toPathPurl } from "@/helpers/pathParamHelpers";

type CodeInspectorProps = {
    purl: string;
    path: string | undefined;
};

const CodeInspector = ({ path, purl }: CodeInspectorProps) => {
    const [fileContents, setFileContents] = useState<string | undefined>(
        undefined,
    );
    const { data, isLoading, error } = userHooks.useGetFileData(
        { purl: purl, path: path as string },
        { withCredentials: true },
        { enabled: !!path && !!purl },
    );
    const fileSha256 = data?.sha256;
    const pathPurl = toPathPurl(purl);
    const { data: licenseConclusions } =
        userHooks.useGetLicenseConclusionsForFileInPackage(
            {
                params: {
                    purl: pathPurl,
                    sha256: fileSha256 as string,
                },
                withCredentials: true,
            },
            { enabled: !!fileSha256 && !!pathPurl },
        );
    const fileUrl = data?.downloadUrl;

    // Fetch ASCII data from the URL
    useEffect(() => {
        if (fileUrl) {
            fetch(fileUrl)
                .then((response) => response.text()) // Assuming the data is text/ASCII
                .then((contents) => {
                    setFileContents(contents);
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [fileUrl]);

    return (
        <div className="flex flex-col h-full">
            <div className="flex-row items-center p-1 mb-2 border rounded-md shadow-lg">
                <Label className="font-bold">File: </Label>
                {path ? (
                    <Badge className="rounded-md">{path}</Badge>
                ) : (
                    <Label className="text-sm">No file opened</Label>
                )}
            </div>

            {data?.licenseFindings[0] && (
                <div className="flex-row items-center p-1 mb-2 border rounded-md shadow-lg">
                    <Label className="font-semibold">Detected SPDX</Label>
                    <p className="p-1 text-xs border rounded-md">
                        {data.licenseFindings.map((license) => (
                            <span key={license.id}>
                                <>
                                    {
                                        new Date(license.updatedAt)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                    : {license.licenseExpressionSPDX}
                                    <br />
                                </>
                            </span>
                        ))}
                    </p>
                </div>
            )}

            {data?.licenseFindings[0]?.licenseFindingMatches && (
                <div className="flex-row items-center p-1 mb-2 border rounded-md shadow-lg">
                    <Label className="font-semibold">
                        Individual license matches
                    </Label>
                    <ButtonGroup
                        data={data.licenseFindings[0].licenseFindingMatches}
                        className="p-1 rounded-md border w-full max-h-[8vh] overflow-y-auto"
                    />
                </div>
            )}

            {fileSha256 && licenseConclusions?.licenseConclusions[0] && (
                <div className="flex-row items-center p-1 mb-2 border rounded-md shadow-lg">
                    <Label className="font-semibold">Curations</Label>
                    <p className="p-1 text-xs border rounded-md">
                        {licenseConclusions.licenseConclusions.map(
                            (license) => (
                                <span key={license.id}>
                                    <>
                                        {
                                            new Date(license.updatedAt)
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        :{" "}
                                        {license.concludedLicenseExpressionSPDX}
                                        <br />
                                    </>
                                </span>
                            ),
                        )}
                    </p>
                </div>
            )}

            <div className="flex items-center justify-center flex-1 overflow-auto">
                {!path && (
                    <div className="flex items-center justify-center h-full">
                        No file opened
                    </div>
                )}
                {path && isLoading && (
                    <div className="flex items-center justify-center h-full">
                        <Loader2 className="w-16 h-16 mr-2 animate-spin" />
                    </div>
                )}
                {data && fileContents && (
                    <CodeEditor
                        contents={fileContents}
                        licenseFindings={data.licenseFindings}
                    />
                )}
                {error && (
                    <div className="flex items-center justify-center h-full">
                        Unable to fetch file data
                    </div>
                )}
            </div>
            {data && purl && licenseConclusions && (
                <CurationForm
                    purl={purl}
                    lcData={licenseConclusions}
                    fileData={data}
                    className="p-1 mt-2 text-sm border rounded-md shadow-lg"
                />
            )}
        </div>
    );
};

export default CodeInspector;