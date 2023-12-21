// SPDX-FileCopyrightText: 2023 Double Open Oy
//
// SPDX-License-Identifier: MIT

import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import BulkCurationForm from "@/components/license_conclusions/BulkCurationForm";

type Props = {
    purl: string;
    open: boolean;
    setOpen: (open: boolean) => void;
};

const BulkCurationFormDialog = ({ purl, open, setOpen }: Props) => {
    return (
        <Dialog open={open}>
            <DialogContent>
                <BulkCurationForm purl={purl} setOpen={setOpen} />
                <DialogFooter className="flex justify-end">
                    <Button
                        variant="outline"
                        className="p-1 text-xs rounded-md"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BulkCurationFormDialog;