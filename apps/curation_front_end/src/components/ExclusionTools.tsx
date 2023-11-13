// SPDX-FileCopyrightText: 2023 Double Open Oy
//
// SPDX-License-Identifier: MIT

import React from "react";
import type { SelectedNode } from "@/types/index";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    TbFolderOff,
    TbFoldersOff,
    TbFileOff,
    TbFilesOff,
} from "react-icons/tb";
import { TfiPencil } from "react-icons/tfi";
import ExclusionFormDialog from "./ExclusionFormDialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    selectedNode: SelectedNode | undefined;
    purl: string | undefined;
};

// Check if the selected node has children directories:
// if it does, then either this node or this and all subdirs can be excluded
const hasChildrenDirs = (node: SelectedNode | undefined) => {
    return node?.children?.some((child: SelectedNode) => !child.isLeaf);
};

const ExclusionTools = ({ selectedNode, purl }: Props) => {
    return (
        <div className="relative p-1 mb-2 flex rounded-md border shadow-lg items-center text-sm">
            <span className="absolute text-gray-500 top-[-10px] left-2 text-xs">
                Path exclusion tools
            </span>
            <>
                <TooltipProvider>
                    <Tooltip>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="group relative">
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            disabled={!selectedNode?.isInternal}
                                            className="p-2"
                                        >
                                            <TbFolderOff className="text-lg" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Exclude this directory
                                    </TooltipContent>
                                </div>
                            </DialogTrigger>
                            <ExclusionFormDialog
                                purl={purl}
                                pattern={selectedNode?.data.path + "/*"}
                            />
                        </Dialog>
                    </Tooltip>
                    <Tooltip>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="group relative">
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            disabled={
                                                !hasChildrenDirs(selectedNode)
                                            }
                                            className="p-2"
                                        >
                                            <TbFoldersOff className="text-lg" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Exclude this and all subdirectories
                                    </TooltipContent>
                                </div>
                            </DialogTrigger>
                            <ExclusionFormDialog
                                purl={purl}
                                pattern={selectedNode?.data.path + "/**"}
                            />
                        </Dialog>
                    </Tooltip>
                    <Tooltip>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="group relative">
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            disabled={!selectedNode?.isLeaf}
                                            className="p-2"
                                        >
                                            <TbFileOff className="text-lg" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Exclude this file
                                    </TooltipContent>
                                </div>
                            </DialogTrigger>
                            <ExclusionFormDialog
                                purl={purl}
                                pattern={selectedNode?.data.path}
                            />
                        </Dialog>
                    </Tooltip>
                    <Tooltip>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="group relative">
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            disabled={!selectedNode?.isLeaf}
                                            className="p-2"
                                        >
                                            <TbFilesOff className="text-lg" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Exclude all files with this extension
                                    </TooltipContent>
                                </div>
                            </DialogTrigger>
                            <ExclusionFormDialog
                                purl={purl}
                                pattern={
                                    "**/*." +
                                    selectedNode?.data.path?.split(".").pop()
                                }
                            />
                        </Dialog>
                    </Tooltip>
                    <Tooltip>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="group relative">
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" className="p-2">
                                            <TfiPencil className="text-lg" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Write a freetext exclusion pattern
                                    </TooltipContent>
                                </div>
                            </DialogTrigger>
                            <ExclusionFormDialog
                                purl={purl}
                                pattern={undefined}
                            />
                        </Dialog>
                    </Tooltip>
                </TooltipProvider>
            </>
        </div>
    );
};

export default ExclusionTools;
