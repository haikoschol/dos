// SPDX-FileCopyrightText: 2023 Double Open Oy
//
// SPDX-License-Identifier: MIT

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { validReasons } from "validation-helpers";
import { z } from "zod";
import { userHooks } from "@/hooks/zodiosHooks";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const exclusionFormSchema = z.object({
    pattern: z.string().min(1, "Pattern cannot be empty"),
    reason: z.string().min(1, "Please select a valid reason from this list"),
    comment: z.string().optional(),
});

type ExclusionFormType = z.infer<typeof exclusionFormSchema>;

type Props = {
    purl: string | undefined;
    pattern?: string;
    setOpen: (open: boolean) => void;
};

const ExclusionForm = ({ purl, pattern, setOpen }: Props) => {
    const defaultValues: ExclusionFormType = {
        pattern: pattern || "",
        reason: "",
        comment: "",
    };
    const form = useForm<ExclusionFormType>({
        resolver: zodResolver(exclusionFormSchema),
        defaultValues,
    });
    const keyPathExclusion = userHooks.getKeyByPath("post", "/path-exclusions");
    const queryClient = useQueryClient();
    const { mutate: addPathExclusion } = userHooks.usePostPathExclusion(
        {
            withCredentials: true,
        },
        {
            onSuccess: () => {
                setOpen(false);
                toast({
                    title: "Path exclusion",
                    description: "Path exclusion added successfully.",
                });
                // When a path exclusions is added, invalidate the query to refetch the data
                queryClient.invalidateQueries(keyPathExclusion);
            },
            onError: (error) => {
                if (axios.isAxiosError(error)) {
                    if (error.response?.data?.path === "pattern") {
                        form.setError("pattern", {
                            type: "manual",
                            message: error.response?.data?.message,
                        });
                    } else if (error.response?.data?.message) {
                        form.setError("root", {
                            type: "manual",
                            message: error.response?.data?.message,
                        });
                    }
                } else {
                    form.setError("root", {
                        type: "manual",
                        message: error.message,
                    });
                }
            },
        },
    );

    const onSubmit = (data: ExclusionFormType) => {
        addPathExclusion({
            purl: purl as string,
            pattern: data.pattern,
            reason: data.reason,
            comment: data.comment,
        });
    };
    const { toast } = useToast();

    return (
        <div className="flex flex-col w-full">
            <Label className="mb-1 font-bold">Add path exclusion</Label>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-1"
                >
                    <FormField
                        control={form.control}
                        name="pattern"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pattern</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="text-xs"
                                        placeholder="Pattern..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Reason</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a valid reason..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {validReasons.map((reason) => (
                                            <SelectItem
                                                key={reason}
                                                value={reason}
                                                onSelect={() =>
                                                    field.onChange(reason)
                                                }
                                            >
                                                {reason}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Comment</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="text-xs"
                                        placeholder="Comment..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {form.formState.errors.root && (
                        <div
                            className="relative px-4 py-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md"
                            role="alert"
                        >
                            <span className="block sm:inline">
                                {form.formState.errors.root?.message}
                            </span>
                        </div>
                    )}
                    <div className="flex justify-end">
                        <Button
                            variant="outline"
                            type="submit"
                            className="p-1 mt-2 text-xs rounded-md"
                        >
                            Add path exclusion
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ExclusionForm;