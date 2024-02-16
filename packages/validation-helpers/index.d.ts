// SPDX-FileCopyrightText: 2023 HH Partners
//
// SPDX-License-Identifier: MIT

import * as zod from "zod";
import { z } from "zod";

declare const ScannerJobResultSchema: z.ZodObject<
    {
        headers: z.ZodArray<
            z.ZodObject<
                {
                    tool_name: z.ZodString;
                    tool_version: z.ZodString;
                    options: z.ZodObject<
                        {
                            "--copyright": z.ZodBoolean;
                            "--info": z.ZodBoolean;
                            "--json": z.ZodOptional<z.ZodString>;
                            "--json-pp": z.ZodOptional<z.ZodString>;
                            "--license": z.ZodBoolean;
                            "--package": z.ZodOptional<z.ZodBoolean>;
                        },
                        "strip",
                        z.ZodTypeAny,
                        {
                            "--copyright": boolean;
                            "--info": boolean;
                            "--license": boolean;
                            "--json"?: string | undefined;
                            "--json-pp"?: string | undefined;
                            "--package"?: boolean | undefined;
                        },
                        {
                            "--copyright": boolean;
                            "--info": boolean;
                            "--license": boolean;
                            "--json"?: string | undefined;
                            "--json-pp"?: string | undefined;
                            "--package"?: boolean | undefined;
                        }
                    >;
                    notice: z.ZodString;
                    start_timestamp: z.ZodString;
                    end_timestamp: z.ZodString;
                    output_format_version: z.ZodString;
                    duration: z.ZodNumber;
                    message: z.ZodNullable<z.ZodString>;
                    errors: z.ZodArray<z.ZodUnknown, "many">;
                    warnings: z.ZodArray<z.ZodUnknown, "many">;
                    extra_data: z.ZodObject<
                        {
                            system_environment: z.ZodObject<
                                {
                                    operating_system: z.ZodString;
                                    cpu_architecture: z.ZodString;
                                    platform: z.ZodString;
                                    platform_version: z.ZodString;
                                    python_version: z.ZodString;
                                },
                                "strip",
                                z.ZodTypeAny,
                                {
                                    operating_system: string;
                                    cpu_architecture: string;
                                    platform: string;
                                    platform_version: string;
                                    python_version: string;
                                },
                                {
                                    operating_system: string;
                                    cpu_architecture: string;
                                    platform: string;
                                    platform_version: string;
                                    python_version: string;
                                }
                            >;
                            spdx_license_list_version: z.ZodString;
                            files_count: z.ZodNumber;
                        },
                        "strip",
                        z.ZodTypeAny,
                        {
                            system_environment: {
                                operating_system: string;
                                cpu_architecture: string;
                                platform: string;
                                platform_version: string;
                                python_version: string;
                            };
                            spdx_license_list_version: string;
                            files_count: number;
                        },
                        {
                            system_environment: {
                                operating_system: string;
                                cpu_architecture: string;
                                platform: string;
                                platform_version: string;
                                python_version: string;
                            };
                            spdx_license_list_version: string;
                            files_count: number;
                        }
                    >;
                },
                "strip",
                z.ZodTypeAny,
                {
                    message: string | null;
                    options: {
                        "--copyright": boolean;
                        "--info": boolean;
                        "--license": boolean;
                        "--json"?: string | undefined;
                        "--json-pp"?: string | undefined;
                        "--package"?: boolean | undefined;
                    };
                    tool_name: string;
                    tool_version: string;
                    notice: string;
                    start_timestamp: string;
                    end_timestamp: string;
                    output_format_version: string;
                    duration: number;
                    errors: unknown[];
                    warnings: unknown[];
                    extra_data: {
                        system_environment: {
                            operating_system: string;
                            cpu_architecture: string;
                            platform: string;
                            platform_version: string;
                            python_version: string;
                        };
                        spdx_license_list_version: string;
                        files_count: number;
                    };
                },
                {
                    message: string | null;
                    options: {
                        "--copyright": boolean;
                        "--info": boolean;
                        "--license": boolean;
                        "--json"?: string | undefined;
                        "--json-pp"?: string | undefined;
                        "--package"?: boolean | undefined;
                    };
                    tool_name: string;
                    tool_version: string;
                    notice: string;
                    start_timestamp: string;
                    end_timestamp: string;
                    output_format_version: string;
                    duration: number;
                    errors: unknown[];
                    warnings: unknown[];
                    extra_data: {
                        system_environment: {
                            operating_system: string;
                            cpu_architecture: string;
                            platform: string;
                            platform_version: string;
                            python_version: string;
                        };
                        spdx_license_list_version: string;
                        files_count: number;
                    };
                }
            >,
            "many"
        >;
        files: z.ZodArray<
            z.ZodObject<
                {
                    path: z.ZodString;
                    type: z.ZodString;
                    sha256: z.ZodNullable<z.ZodString>;
                    detected_license_expression: z.ZodNullable<z.ZodString>;
                    detected_license_expression_spdx: z.ZodNullable<z.ZodString>;
                    license_detections: z.ZodArray<
                        z.ZodObject<
                            {
                                license_expression: z.ZodString;
                                matches: z.ZodArray<
                                    z.ZodObject<
                                        {
                                            score: z.ZodNumber;
                                            start_line: z.ZodNumber;
                                            end_line: z.ZodNumber;
                                            license_expression: z.ZodString;
                                        },
                                        "strip",
                                        z.ZodTypeAny,
                                        {
                                            license_expression: string;
                                            score: number;
                                            start_line: number;
                                            end_line: number;
                                        },
                                        {
                                            license_expression: string;
                                            score: number;
                                            start_line: number;
                                            end_line: number;
                                        }
                                    >,
                                    "many"
                                >;
                            },
                            "strip",
                            z.ZodTypeAny,
                            {
                                license_expression: string;
                                matches: {
                                    license_expression: string;
                                    score: number;
                                    start_line: number;
                                    end_line: number;
                                }[];
                            },
                            {
                                license_expression: string;
                                matches: {
                                    license_expression: string;
                                    score: number;
                                    start_line: number;
                                    end_line: number;
                                }[];
                            }
                        >,
                        "many"
                    >;
                    copyrights: z.ZodArray<
                        z.ZodObject<
                            {
                                copyright: z.ZodString;
                                start_line: z.ZodNumber;
                                end_line: z.ZodNumber;
                            },
                            "strip",
                            z.ZodTypeAny,
                            {
                                start_line: number;
                                end_line: number;
                                copyright: string;
                            },
                            {
                                start_line: number;
                                end_line: number;
                                copyright: string;
                            }
                        >,
                        "many"
                    >;
                    scan_errors: z.ZodArray<z.ZodString, "many">;
                },
                "strip",
                z.ZodTypeAny,
                {
                    path: string;
                    type: string;
                    sha256: string | null;
                    detected_license_expression: string | null;
                    detected_license_expression_spdx: string | null;
                    license_detections: {
                        license_expression: string;
                        matches: {
                            license_expression: string;
                            score: number;
                            start_line: number;
                            end_line: number;
                        }[];
                    }[];
                    copyrights: {
                        start_line: number;
                        end_line: number;
                        copyright: string;
                    }[];
                    scan_errors: string[];
                },
                {
                    path: string;
                    type: string;
                    sha256: string | null;
                    detected_license_expression: string | null;
                    detected_license_expression_spdx: string | null;
                    license_detections: {
                        license_expression: string;
                        matches: {
                            license_expression: string;
                            score: number;
                            start_line: number;
                            end_line: number;
                        }[];
                    }[];
                    copyrights: {
                        start_line: number;
                        end_line: number;
                        copyright: string;
                    }[];
                    scan_errors: string[];
                }
            >,
            "many"
        >;
    },
    "strip",
    z.ZodTypeAny,
    {
        files: {
            path: string;
            type: string;
            sha256: string | null;
            detected_license_expression: string | null;
            detected_license_expression_spdx: string | null;
            license_detections: {
                license_expression: string;
                matches: {
                    license_expression: string;
                    score: number;
                    start_line: number;
                    end_line: number;
                }[];
            }[];
            copyrights: {
                start_line: number;
                end_line: number;
                copyright: string;
            }[];
            scan_errors: string[];
        }[];
        headers: {
            message: string | null;
            options: {
                "--copyright": boolean;
                "--info": boolean;
                "--license": boolean;
                "--json"?: string | undefined;
                "--json-pp"?: string | undefined;
                "--package"?: boolean | undefined;
            };
            tool_name: string;
            tool_version: string;
            notice: string;
            start_timestamp: string;
            end_timestamp: string;
            output_format_version: string;
            duration: number;
            errors: unknown[];
            warnings: unknown[];
            extra_data: {
                system_environment: {
                    operating_system: string;
                    cpu_architecture: string;
                    platform: string;
                    platform_version: string;
                    python_version: string;
                };
                spdx_license_list_version: string;
                files_count: number;
            };
        }[];
    },
    {
        files: {
            path: string;
            type: string;
            sha256: string | null;
            detected_license_expression: string | null;
            detected_license_expression_spdx: string | null;
            license_detections: {
                license_expression: string;
                matches: {
                    license_expression: string;
                    score: number;
                    start_line: number;
                    end_line: number;
                }[];
            }[];
            copyrights: {
                start_line: number;
                end_line: number;
                copyright: string;
            }[];
            scan_errors: string[];
        }[];
        headers: {
            message: string | null;
            options: {
                "--copyright": boolean;
                "--info": boolean;
                "--license": boolean;
                "--json"?: string | undefined;
                "--json-pp"?: string | undefined;
                "--package"?: boolean | undefined;
            };
            tool_name: string;
            tool_version: string;
            notice: string;
            start_timestamp: string;
            end_timestamp: string;
            output_format_version: string;
            duration: number;
            errors: unknown[];
            warnings: unknown[];
            extra_data: {
                system_environment: {
                    operating_system: string;
                    cpu_architecture: string;
                    platform: string;
                    platform_version: string;
                    python_version: string;
                };
                spdx_license_list_version: string;
                files_count: number;
            };
        }[];
    }
>;
type ScannerJobResultType = z.infer<typeof ScannerJobResultSchema>;

declare const scannerAgentApi: [
    {
        method: "get";
        path: "/";
        description: "Root endpoint";
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 401;
                description: "No token provided";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 403;
                description: "Token is invalid";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 404;
                description: "No such job in the work queue";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/jobs";
        description: "List all jobs";
        response: zod.ZodArray<
            zod.ZodObject<
                {
                    id: zod.ZodString;
                    state: zod.ZodString;
                    finishedOn: zod.ZodOptional<zod.ZodNumber>;
                },
                "strip",
                zod.ZodTypeAny,
                {
                    id: string;
                    state: string;
                    finishedOn?: number | undefined;
                },
                {
                    id: string;
                    state: string;
                    finishedOn?: number | undefined;
                }
            >,
            "many"
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 401;
                description: "No token provided";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 403;
                description: "Token is invalid";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 404;
                description: "No such job in the work queue";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/job";
        description: "Add scanner job";
        alias: "postJob";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        jobId: zod.ZodString;
                        options: zod.ZodObject<
                            {
                                timeout: zod.ZodOptional<zod.ZodString>;
                            },
                            "strip",
                            zod.ZodTypeAny,
                            {
                                timeout?: string | undefined;
                            },
                            {
                                timeout?: string | undefined;
                            }
                        >;
                        files: zod.ZodArray<
                            zod.ZodObject<
                                {
                                    hash: zod.ZodString;
                                    path: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    path: string;
                                    hash: string;
                                },
                                {
                                    path: string;
                                    hash: string;
                                }
                            >,
                            "many"
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        options: {
                            timeout?: string | undefined;
                        };
                        jobId: string;
                        files: {
                            path: string;
                            hash: string;
                        }[];
                    },
                    {
                        options: {
                            timeout?: string | undefined;
                        };
                        jobId: string;
                        files: {
                            path: string;
                            hash: string;
                        }[];
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                id: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                id: string;
            },
            {
                id: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 401;
                description: "No token provided";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 403;
                description: "Token is invalid";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 404;
                description: "No such job in the work queue";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/job/:id";
        description: "Get scanner job status";
        alias: "getJobDetails";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                id: zod.ZodString;
                state: zod.ZodString;
                data: zod.ZodOptional<
                    zod.ZodObject<
                        {
                            directory: zod.ZodOptional<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            directory?: string | undefined;
                        },
                        {
                            directory?: string | undefined;
                        }
                    >
                >;
                finishedOn: zod.ZodOptional<zod.ZodNumber>;
                result: zod.ZodOptional<
                    zod.ZodObject<
                        {
                            headers: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        tool_name: zod.ZodString;
                                        tool_version: zod.ZodString;
                                        options: zod.ZodObject<
                                            {
                                                "--copyright": zod.ZodBoolean;
                                                "--info": zod.ZodBoolean;
                                                "--json": zod.ZodOptional<zod.ZodString>;
                                                "--json-pp": zod.ZodOptional<zod.ZodString>;
                                                "--license": zod.ZodBoolean;
                                                "--package": zod.ZodOptional<zod.ZodBoolean>;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                "--copyright": boolean;
                                                "--info": boolean;
                                                "--license": boolean;
                                                "--json"?: string | undefined;
                                                "--json-pp"?:
                                                    | string
                                                    | undefined;
                                                "--package"?:
                                                    | boolean
                                                    | undefined;
                                            },
                                            {
                                                "--copyright": boolean;
                                                "--info": boolean;
                                                "--license": boolean;
                                                "--json"?: string | undefined;
                                                "--json-pp"?:
                                                    | string
                                                    | undefined;
                                                "--package"?:
                                                    | boolean
                                                    | undefined;
                                            }
                                        >;
                                        notice: zod.ZodString;
                                        start_timestamp: zod.ZodString;
                                        end_timestamp: zod.ZodString;
                                        output_format_version: zod.ZodString;
                                        duration: zod.ZodNumber;
                                        message: zod.ZodNullable<zod.ZodString>;
                                        errors: zod.ZodArray<
                                            zod.ZodUnknown,
                                            "many"
                                        >;
                                        warnings: zod.ZodArray<
                                            zod.ZodUnknown,
                                            "many"
                                        >;
                                        extra_data: zod.ZodObject<
                                            {
                                                system_environment: zod.ZodObject<
                                                    {
                                                        operating_system: zod.ZodString;
                                                        cpu_architecture: zod.ZodString;
                                                        platform: zod.ZodString;
                                                        platform_version: zod.ZodString;
                                                        python_version: zod.ZodString;
                                                    },
                                                    "strip",
                                                    zod.ZodTypeAny,
                                                    {
                                                        operating_system: string;
                                                        cpu_architecture: string;
                                                        platform: string;
                                                        platform_version: string;
                                                        python_version: string;
                                                    },
                                                    {
                                                        operating_system: string;
                                                        cpu_architecture: string;
                                                        platform: string;
                                                        platform_version: string;
                                                        python_version: string;
                                                    }
                                                >;
                                                spdx_license_list_version: zod.ZodString;
                                                files_count: zod.ZodNumber;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                system_environment: {
                                                    operating_system: string;
                                                    cpu_architecture: string;
                                                    platform: string;
                                                    platform_version: string;
                                                    python_version: string;
                                                };
                                                spdx_license_list_version: string;
                                                files_count: number;
                                            },
                                            {
                                                system_environment: {
                                                    operating_system: string;
                                                    cpu_architecture: string;
                                                    platform: string;
                                                    platform_version: string;
                                                    python_version: string;
                                                };
                                                spdx_license_list_version: string;
                                                files_count: number;
                                            }
                                        >;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        message: string | null;
                                        options: {
                                            "--copyright": boolean;
                                            "--info": boolean;
                                            "--license": boolean;
                                            "--json"?: string | undefined;
                                            "--json-pp"?: string | undefined;
                                            "--package"?: boolean | undefined;
                                        };
                                        tool_name: string;
                                        tool_version: string;
                                        notice: string;
                                        start_timestamp: string;
                                        end_timestamp: string;
                                        output_format_version: string;
                                        duration: number;
                                        errors: unknown[];
                                        warnings: unknown[];
                                        extra_data: {
                                            system_environment: {
                                                operating_system: string;
                                                cpu_architecture: string;
                                                platform: string;
                                                platform_version: string;
                                                python_version: string;
                                            };
                                            spdx_license_list_version: string;
                                            files_count: number;
                                        };
                                    },
                                    {
                                        message: string | null;
                                        options: {
                                            "--copyright": boolean;
                                            "--info": boolean;
                                            "--license": boolean;
                                            "--json"?: string | undefined;
                                            "--json-pp"?: string | undefined;
                                            "--package"?: boolean | undefined;
                                        };
                                        tool_name: string;
                                        tool_version: string;
                                        notice: string;
                                        start_timestamp: string;
                                        end_timestamp: string;
                                        output_format_version: string;
                                        duration: number;
                                        errors: unknown[];
                                        warnings: unknown[];
                                        extra_data: {
                                            system_environment: {
                                                operating_system: string;
                                                cpu_architecture: string;
                                                platform: string;
                                                platform_version: string;
                                                python_version: string;
                                            };
                                            spdx_license_list_version: string;
                                            files_count: number;
                                        };
                                    }
                                >,
                                "many"
                            >;
                            files: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        path: zod.ZodString;
                                        type: zod.ZodString;
                                        sha256: zod.ZodNullable<zod.ZodString>;
                                        detected_license_expression: zod.ZodNullable<zod.ZodString>;
                                        detected_license_expression_spdx: zod.ZodNullable<zod.ZodString>;
                                        license_detections: zod.ZodArray<
                                            zod.ZodObject<
                                                {
                                                    license_expression: zod.ZodString;
                                                    matches: zod.ZodArray<
                                                        zod.ZodObject<
                                                            {
                                                                score: zod.ZodNumber;
                                                                start_line: zod.ZodNumber;
                                                                end_line: zod.ZodNumber;
                                                                license_expression: zod.ZodString;
                                                            },
                                                            "strip",
                                                            zod.ZodTypeAny,
                                                            {
                                                                license_expression: string;
                                                                score: number;
                                                                start_line: number;
                                                                end_line: number;
                                                            },
                                                            {
                                                                license_expression: string;
                                                                score: number;
                                                                start_line: number;
                                                                end_line: number;
                                                            }
                                                        >,
                                                        "many"
                                                    >;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    license_expression: string;
                                                    matches: {
                                                        license_expression: string;
                                                        score: number;
                                                        start_line: number;
                                                        end_line: number;
                                                    }[];
                                                },
                                                {
                                                    license_expression: string;
                                                    matches: {
                                                        license_expression: string;
                                                        score: number;
                                                        start_line: number;
                                                        end_line: number;
                                                    }[];
                                                }
                                            >,
                                            "many"
                                        >;
                                        copyrights: zod.ZodArray<
                                            zod.ZodObject<
                                                {
                                                    copyright: zod.ZodString;
                                                    start_line: zod.ZodNumber;
                                                    end_line: zod.ZodNumber;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    start_line: number;
                                                    end_line: number;
                                                    copyright: string;
                                                },
                                                {
                                                    start_line: number;
                                                    end_line: number;
                                                    copyright: string;
                                                }
                                            >,
                                            "many"
                                        >;
                                        scan_errors: zod.ZodArray<
                                            zod.ZodString,
                                            "many"
                                        >;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        path: string;
                                        type: string;
                                        sha256: string | null;
                                        detected_license_expression:
                                            | string
                                            | null;
                                        detected_license_expression_spdx:
                                            | string
                                            | null;
                                        license_detections: {
                                            license_expression: string;
                                            matches: {
                                                license_expression: string;
                                                score: number;
                                                start_line: number;
                                                end_line: number;
                                            }[];
                                        }[];
                                        copyrights: {
                                            start_line: number;
                                            end_line: number;
                                            copyright: string;
                                        }[];
                                        scan_errors: string[];
                                    },
                                    {
                                        path: string;
                                        type: string;
                                        sha256: string | null;
                                        detected_license_expression:
                                            | string
                                            | null;
                                        detected_license_expression_spdx:
                                            | string
                                            | null;
                                        license_detections: {
                                            license_expression: string;
                                            matches: {
                                                license_expression: string;
                                                score: number;
                                                start_line: number;
                                                end_line: number;
                                            }[];
                                        }[];
                                        copyrights: {
                                            start_line: number;
                                            end_line: number;
                                            copyright: string;
                                        }[];
                                        scan_errors: string[];
                                    }
                                >,
                                "many"
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            files: {
                                path: string;
                                type: string;
                                sha256: string | null;
                                detected_license_expression: string | null;
                                detected_license_expression_spdx: string | null;
                                license_detections: {
                                    license_expression: string;
                                    matches: {
                                        license_expression: string;
                                        score: number;
                                        start_line: number;
                                        end_line: number;
                                    }[];
                                }[];
                                copyrights: {
                                    start_line: number;
                                    end_line: number;
                                    copyright: string;
                                }[];
                                scan_errors: string[];
                            }[];
                            headers: {
                                message: string | null;
                                options: {
                                    "--copyright": boolean;
                                    "--info": boolean;
                                    "--license": boolean;
                                    "--json"?: string | undefined;
                                    "--json-pp"?: string | undefined;
                                    "--package"?: boolean | undefined;
                                };
                                tool_name: string;
                                tool_version: string;
                                notice: string;
                                start_timestamp: string;
                                end_timestamp: string;
                                output_format_version: string;
                                duration: number;
                                errors: unknown[];
                                warnings: unknown[];
                                extra_data: {
                                    system_environment: {
                                        operating_system: string;
                                        cpu_architecture: string;
                                        platform: string;
                                        platform_version: string;
                                        python_version: string;
                                    };
                                    spdx_license_list_version: string;
                                    files_count: number;
                                };
                            }[];
                        },
                        {
                            files: {
                                path: string;
                                type: string;
                                sha256: string | null;
                                detected_license_expression: string | null;
                                detected_license_expression_spdx: string | null;
                                license_detections: {
                                    license_expression: string;
                                    matches: {
                                        license_expression: string;
                                        score: number;
                                        start_line: number;
                                        end_line: number;
                                    }[];
                                }[];
                                copyrights: {
                                    start_line: number;
                                    end_line: number;
                                    copyright: string;
                                }[];
                                scan_errors: string[];
                            }[];
                            headers: {
                                message: string | null;
                                options: {
                                    "--copyright": boolean;
                                    "--info": boolean;
                                    "--license": boolean;
                                    "--json"?: string | undefined;
                                    "--json-pp"?: string | undefined;
                                    "--package"?: boolean | undefined;
                                };
                                tool_name: string;
                                tool_version: string;
                                notice: string;
                                start_timestamp: string;
                                end_timestamp: string;
                                output_format_version: string;
                                duration: number;
                                errors: unknown[];
                                warnings: unknown[];
                                extra_data: {
                                    system_environment: {
                                        operating_system: string;
                                        cpu_architecture: string;
                                        platform: string;
                                        platform_version: string;
                                        python_version: string;
                                    };
                                    spdx_license_list_version: string;
                                    files_count: number;
                                };
                            }[];
                        }
                    >
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                id: string;
                state: string;
                data?:
                    | {
                          directory?: string | undefined;
                      }
                    | undefined;
                finishedOn?: number | undefined;
                result?:
                    | {
                          files: {
                              path: string;
                              type: string;
                              sha256: string | null;
                              detected_license_expression: string | null;
                              detected_license_expression_spdx: string | null;
                              license_detections: {
                                  license_expression: string;
                                  matches: {
                                      license_expression: string;
                                      score: number;
                                      start_line: number;
                                      end_line: number;
                                  }[];
                              }[];
                              copyrights: {
                                  start_line: number;
                                  end_line: number;
                                  copyright: string;
                              }[];
                              scan_errors: string[];
                          }[];
                          headers: {
                              message: string | null;
                              options: {
                                  "--copyright": boolean;
                                  "--info": boolean;
                                  "--license": boolean;
                                  "--json"?: string | undefined;
                                  "--json-pp"?: string | undefined;
                                  "--package"?: boolean | undefined;
                              };
                              tool_name: string;
                              tool_version: string;
                              notice: string;
                              start_timestamp: string;
                              end_timestamp: string;
                              output_format_version: string;
                              duration: number;
                              errors: unknown[];
                              warnings: unknown[];
                              extra_data: {
                                  system_environment: {
                                      operating_system: string;
                                      cpu_architecture: string;
                                      platform: string;
                                      platform_version: string;
                                      python_version: string;
                                  };
                                  spdx_license_list_version: string;
                                  files_count: number;
                              };
                          }[];
                      }
                    | undefined;
            },
            {
                id: string;
                state: string;
                data?:
                    | {
                          directory?: string | undefined;
                      }
                    | undefined;
                finishedOn?: number | undefined;
                result?:
                    | {
                          files: {
                              path: string;
                              type: string;
                              sha256: string | null;
                              detected_license_expression: string | null;
                              detected_license_expression_spdx: string | null;
                              license_detections: {
                                  license_expression: string;
                                  matches: {
                                      license_expression: string;
                                      score: number;
                                      start_line: number;
                                      end_line: number;
                                  }[];
                              }[];
                              copyrights: {
                                  start_line: number;
                                  end_line: number;
                                  copyright: string;
                              }[];
                              scan_errors: string[];
                          }[];
                          headers: {
                              message: string | null;
                              options: {
                                  "--copyright": boolean;
                                  "--info": boolean;
                                  "--license": boolean;
                                  "--json"?: string | undefined;
                                  "--json-pp"?: string | undefined;
                                  "--package"?: boolean | undefined;
                              };
                              tool_name: string;
                              tool_version: string;
                              notice: string;
                              start_timestamp: string;
                              end_timestamp: string;
                              output_format_version: string;
                              duration: number;
                              errors: unknown[];
                              warnings: unknown[];
                              extra_data: {
                                  system_environment: {
                                      operating_system: string;
                                      cpu_architecture: string;
                                      platform: string;
                                      platform_version: string;
                                      python_version: string;
                                  };
                                  spdx_license_list_version: string;
                                  files_count: number;
                              };
                          }[];
                      }
                    | undefined;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 401;
                description: "No token provided";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 403;
                description: "Token is invalid";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 404;
                description: "No such job in the work queue";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/result-state/:id";
        description: "Set scanner job result state";
        alias: "postResultState";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        state: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        state: string;
                    },
                    {
                        state: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 401;
                description: "No token provided";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 403;
                description: "Token is invalid";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
            {
                status: 404;
                description: "No such job in the work queue";
                schema: zod.ZodObject<
                    {
                        error: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        error: string;
                    },
                    {
                        error: string;
                    }
                >;
            },
        ];
    },
];

declare const adminAPI: [
    {
        method: "delete";
        path: "/scan-results";
        description: "Delete scan results and other data for specified purl. Doesn't delete files and related data if files are in other packages";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        purl: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purl: string;
                    },
                    {
                        purl: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/user";
        description: "Add user";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        username: zod.ZodEffects<
                            zod.ZodEffects<
                                zod.ZodEffects<zod.ZodString, string, string>,
                                string,
                                string
                            >,
                            string,
                            string
                        >;
                        password: zod.ZodEffects<zod.ZodString, string, string>;
                        role: zod.ZodOptional<zod.ZodEnum<["ADMIN", "USER"]>>;
                        subscription: zod.ZodOptional<
                            zod.ZodEnum<["SILVER", "GOLD"]>
                        >;
                        token: zod.ZodOptional<zod.ZodString>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        username: string;
                        password: string;
                        role?: "ADMIN" | "USER" | undefined;
                        subscription?: "SILVER" | "GOLD" | undefined;
                        token?: string | undefined;
                    },
                    {
                        username: string;
                        password: string;
                        role?: "ADMIN" | "USER" | undefined;
                        subscription?: "SILVER" | "GOLD" | undefined;
                        token?: string | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                username: zod.ZodString;
                password: zod.ZodString;
                role: zod.ZodEnum<["ADMIN", "USER"]>;
                subscription: zod.ZodEnum<["SILVER", "GOLD"]>;
                token: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                username: string;
                password: string;
                role: "ADMIN" | "USER";
                subscription: "SILVER" | "GOLD";
                token: string;
            },
            {
                username: string;
                password: string;
                role: "ADMIN" | "USER";
                subscription: "SILVER" | "GOLD";
                token: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/user/:id";
        description: "Delete user";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/purl-cleanup";
        description: "Remove old purl bookmarks. Get detailed descriptions of options by making this query with an empty body.";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        options: zod.ZodOptional<
                            zod.ZodObject<
                                {
                                    dryRun: zod.ZodOptional<zod.ZodBoolean>;
                                    pkgNameStartsWith: zod.ZodOptional<zod.ZodString>;
                                    allPhases: zod.ZodOptional<zod.ZodBoolean>;
                                    transferPathExclusions: zod.ZodOptional<zod.ZodBoolean>;
                                    transferBulkConclusions: zod.ZodOptional<zod.ZodBoolean>;
                                    changeContextPurls: zod.ZodOptional<zod.ZodBoolean>;
                                    deleteOldPurlBookmarks: zod.ZodOptional<zod.ZodBoolean>;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    dryRun?: boolean | undefined;
                                    pkgNameStartsWith?: string | undefined;
                                    allPhases?: boolean | undefined;
                                    transferPathExclusions?:
                                        | boolean
                                        | undefined;
                                    transferBulkConclusions?:
                                        | boolean
                                        | undefined;
                                    changeContextPurls?: boolean | undefined;
                                    deleteOldPurlBookmarks?:
                                        | boolean
                                        | undefined;
                                },
                                {
                                    dryRun?: boolean | undefined;
                                    pkgNameStartsWith?: string | undefined;
                                    allPhases?: boolean | undefined;
                                    transferPathExclusions?:
                                        | boolean
                                        | undefined;
                                    transferBulkConclusions?:
                                        | boolean
                                        | undefined;
                                    changeContextPurls?: boolean | undefined;
                                    deleteOldPurlBookmarks?:
                                        | boolean
                                        | undefined;
                                }
                            >
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        options?:
                            | {
                                  dryRun?: boolean | undefined;
                                  pkgNameStartsWith?: string | undefined;
                                  allPhases?: boolean | undefined;
                                  transferPathExclusions?: boolean | undefined;
                                  transferBulkConclusions?: boolean | undefined;
                                  changeContextPurls?: boolean | undefined;
                                  deleteOldPurlBookmarks?: boolean | undefined;
                              }
                            | undefined;
                    },
                    {
                        options?:
                            | {
                                  dryRun?: boolean | undefined;
                                  pkgNameStartsWith?: string | undefined;
                                  allPhases?: boolean | undefined;
                                  transferPathExclusions?: boolean | undefined;
                                  transferBulkConclusions?: boolean | undefined;
                                  changeContextPurls?: boolean | undefined;
                                  deleteOldPurlBookmarks?: boolean | undefined;
                              }
                            | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
                optionDescriptions: zod.ZodObject<
                    {
                        dryRun: zod.ZodString;
                        pkgNameStartsWith: zod.ZodString;
                        allPhases: zod.ZodString;
                        transferPathExclusions: zod.ZodString;
                        transferBulkConclusions: zod.ZodString;
                        changeContextPurls: zod.ZodString;
                        deleteOldPurlBookmarks: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        dryRun: string;
                        pkgNameStartsWith: string;
                        allPhases: string;
                        transferPathExclusions: string;
                        transferBulkConclusions: string;
                        changeContextPurls: string;
                        deleteOldPurlBookmarks: string;
                    },
                    {
                        dryRun: string;
                        pkgNameStartsWith: string;
                        allPhases: string;
                        transferPathExclusions: string;
                        transferBulkConclusions: string;
                        changeContextPurls: string;
                        deleteOldPurlBookmarks: string;
                    }
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                optionDescriptions: {
                    dryRun: string;
                    pkgNameStartsWith: string;
                    allPhases: string;
                    transferPathExclusions: string;
                    transferBulkConclusions: string;
                    changeContextPurls: string;
                    deleteOldPurlBookmarks: string;
                };
            },
            {
                message: string;
                optionDescriptions: {
                    dryRun: string;
                    pkgNameStartsWith: string;
                    allPhases: string;
                    transferPathExclusions: string;
                    transferBulkConclusions: string;
                    changeContextPurls: string;
                    deleteOldPurlBookmarks: string;
                };
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
];

declare const authAPI: [
    {
        method: "post";
        path: "/login/password";
        description: "Login with password";
        alias: "PostLoginPassword";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        username: zod.ZodString;
                        password: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        username: string;
                        password: string;
                    },
                    {
                        username: string;
                        password: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/logout";
        description: "Logout";
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
];

declare const scannerAPI: [
    {
        method: "post";
        path: "/scan-results";
        description: string;
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        purls: zod.ZodArray<
                            zod.ZodEffects<zod.ZodString, string, string>,
                            "many"
                        >;
                        options: zod.ZodOptional<
                            zod.ZodObject<
                                {
                                    fetchConcluded: zod.ZodOptional<zod.ZodBoolean>;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    fetchConcluded?: boolean | undefined;
                                },
                                {
                                    fetchConcluded?: boolean | undefined;
                                }
                            >
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purls: string[];
                        options?:
                            | {
                                  fetchConcluded?: boolean | undefined;
                              }
                            | undefined;
                    },
                    {
                        purls: string[];
                        options?:
                            | {
                                  fetchConcluded?: boolean | undefined;
                              }
                            | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                purls: zod.ZodArray<
                    zod.ZodEffects<zod.ZodString, string, string>,
                    "many"
                >;
                state: zod.ZodObject<
                    {
                        status: zod.ZodEnum<["no-results", "pending", "ready"]>;
                        jobId: zod.ZodNullable<zod.ZodString>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        status: "no-results" | "pending" | "ready";
                        jobId: string | null;
                    },
                    {
                        status: "no-results" | "pending" | "ready";
                        jobId: string | null;
                    }
                >;
                results: zod.ZodUnion<
                    [
                        zod.ZodNull,
                        zod.ZodObject<
                            {
                                licenses: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            license: zod.ZodString;
                                            location: zod.ZodObject<
                                                {
                                                    path: zod.ZodString;
                                                    start_line: zod.ZodOptional<zod.ZodNumber>;
                                                    end_line: zod.ZodOptional<zod.ZodNumber>;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    path: string;
                                                    start_line?:
                                                        | number
                                                        | undefined;
                                                    end_line?:
                                                        | number
                                                        | undefined;
                                                },
                                                {
                                                    path: string;
                                                    start_line?:
                                                        | number
                                                        | undefined;
                                                    end_line?:
                                                        | number
                                                        | undefined;
                                                }
                                            >;
                                            score: zod.ZodOptional<zod.ZodNumber>;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            license: string;
                                            location: {
                                                path: string;
                                                start_line?: number | undefined;
                                                end_line?: number | undefined;
                                            };
                                            score?: number | undefined;
                                        },
                                        {
                                            license: string;
                                            location: {
                                                path: string;
                                                start_line?: number | undefined;
                                                end_line?: number | undefined;
                                            };
                                            score?: number | undefined;
                                        }
                                    >,
                                    "many"
                                >;
                                copyrights: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            statement: zod.ZodString;
                                            location: zod.ZodObject<
                                                {
                                                    path: zod.ZodString;
                                                    start_line: zod.ZodNumber;
                                                    end_line: zod.ZodNumber;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    path: string;
                                                    start_line: number;
                                                    end_line: number;
                                                },
                                                {
                                                    path: string;
                                                    start_line: number;
                                                    end_line: number;
                                                }
                                            >;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            location: {
                                                path: string;
                                                start_line: number;
                                                end_line: number;
                                            };
                                            statement: string;
                                        },
                                        {
                                            location: {
                                                path: string;
                                                start_line: number;
                                                end_line: number;
                                            };
                                            statement: string;
                                        }
                                    >,
                                    "many"
                                >;
                                issues: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            timestamp: zod.ZodDate;
                                            source: zod.ZodString;
                                            message: zod.ZodString;
                                            severity: zod.ZodString;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            message: string;
                                            timestamp: Date;
                                            source: string;
                                            severity: string;
                                        },
                                        {
                                            message: string;
                                            timestamp: Date;
                                            source: string;
                                            severity: string;
                                        }
                                    >,
                                    "many"
                                >;
                            },
                            "strip",
                            zod.ZodTypeAny,
                            {
                                copyrights: {
                                    location: {
                                        path: string;
                                        start_line: number;
                                        end_line: number;
                                    };
                                    statement: string;
                                }[];
                                licenses: {
                                    license: string;
                                    location: {
                                        path: string;
                                        start_line?: number | undefined;
                                        end_line?: number | undefined;
                                    };
                                    score?: number | undefined;
                                }[];
                                issues: {
                                    message: string;
                                    timestamp: Date;
                                    source: string;
                                    severity: string;
                                }[];
                            },
                            {
                                copyrights: {
                                    location: {
                                        path: string;
                                        start_line: number;
                                        end_line: number;
                                    };
                                    statement: string;
                                }[];
                                licenses: {
                                    license: string;
                                    location: {
                                        path: string;
                                        start_line?: number | undefined;
                                        end_line?: number | undefined;
                                    };
                                    score?: number | undefined;
                                }[];
                                issues: {
                                    message: string;
                                    timestamp: Date;
                                    source: string;
                                    severity: string;
                                }[];
                            }
                        >,
                    ]
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                state: {
                    status: "no-results" | "pending" | "ready";
                    jobId: string | null;
                };
                purls: string[];
                results: {
                    copyrights: {
                        location: {
                            path: string;
                            start_line: number;
                            end_line: number;
                        };
                        statement: string;
                    }[];
                    licenses: {
                        license: string;
                        location: {
                            path: string;
                            start_line?: number | undefined;
                            end_line?: number | undefined;
                        };
                        score?: number | undefined;
                    }[];
                    issues: {
                        message: string;
                        timestamp: Date;
                        source: string;
                        severity: string;
                    }[];
                } | null;
            },
            {
                state: {
                    status: "no-results" | "pending" | "ready";
                    jobId: string | null;
                };
                purls: string[];
                results: {
                    copyrights: {
                        location: {
                            path: string;
                            start_line: number;
                            end_line: number;
                        };
                        statement: string;
                    }[];
                    licenses: {
                        license: string;
                        location: {
                            path: string;
                            start_line?: number | undefined;
                            end_line?: number | undefined;
                        };
                        score?: number | undefined;
                    }[];
                    issues: {
                        message: string;
                        timestamp: Date;
                        source: string;
                        severity: string;
                    }[];
                } | null;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/package-configuration";
        description: "Get package configuration for specified purl";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        purl: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purl: string;
                    },
                    {
                        purl: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            path: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            path: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                        },
                        {
                            path: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                        }
                    >,
                    "many"
                >;
                pathExclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            pattern: zod.ZodString;
                            reason: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            comment: string | null;
                            pattern: string;
                            reason: string;
                        },
                        {
                            comment: string | null;
                            pattern: string;
                            reason: string;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    path: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                }[];
                pathExclusions: {
                    comment: string | null;
                    pattern: string;
                    reason: string;
                }[];
            },
            {
                licenseConclusions: {
                    path: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                }[];
                pathExclusions: {
                    comment: string | null;
                    pattern: string;
                    reason: string;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/upload-url";
        description: "Get presigned upload URL for S3 object storage with specified object key";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        key: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        key: string;
                    },
                    {
                        key: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                success: zod.ZodBoolean;
                presignedUrl: zod.ZodOptional<zod.ZodString>;
                message: zod.ZodOptional<zod.ZodString>;
            },
            "strip",
            zod.ZodTypeAny,
            {
                success: boolean;
                presignedUrl?: string | undefined;
                message?: string | undefined;
            },
            {
                success: boolean;
                presignedUrl?: string | undefined;
                message?: string | undefined;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/job";
        description: "Add new scanner job for specified purl(s). Give multiple purls in the case where these purls are all part of the same source.";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        zipFileKey: zod.ZodString;
                        purls: zod.ZodArray<
                            zod.ZodEffects<zod.ZodString, string, string>,
                            "many"
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purls: string[];
                        zipFileKey: string;
                    },
                    {
                        purls: string[];
                        zipFileKey: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                scannerJobId: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                scannerJobId: string;
            },
            {
                scannerJobId: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/job-state/:id";
        description: "Get state for scanner job with given id";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                state: zod.ZodObject<
                    {
                        status: zod.ZodString;
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        status: string;
                    },
                    {
                        message: string;
                        status: string;
                    }
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                state: {
                    message: string;
                    status: string;
                };
            },
            {
                state: {
                    message: string;
                    status: string;
                };
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/job-state/:id";
        description: "Edit scanner job state";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        state: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        state: string;
                    },
                    {
                        state: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/job-results";
        description: "Save scanner job results";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        id: zod.ZodString;
                        result: zod.ZodObject<
                            {
                                headers: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            tool_name: zod.ZodString;
                                            tool_version: zod.ZodString;
                                            options: zod.ZodObject<
                                                {
                                                    "--copyright": zod.ZodBoolean;
                                                    "--info": zod.ZodBoolean;
                                                    "--json": zod.ZodOptional<zod.ZodString>;
                                                    "--json-pp": zod.ZodOptional<zod.ZodString>;
                                                    "--license": zod.ZodBoolean;
                                                    "--package": zod.ZodOptional<zod.ZodBoolean>;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    "--copyright": boolean;
                                                    "--info": boolean;
                                                    "--license": boolean;
                                                    "--json"?:
                                                        | string
                                                        | undefined;
                                                    "--json-pp"?:
                                                        | string
                                                        | undefined;
                                                    "--package"?:
                                                        | boolean
                                                        | undefined;
                                                },
                                                {
                                                    "--copyright": boolean;
                                                    "--info": boolean;
                                                    "--license": boolean;
                                                    "--json"?:
                                                        | string
                                                        | undefined;
                                                    "--json-pp"?:
                                                        | string
                                                        | undefined;
                                                    "--package"?:
                                                        | boolean
                                                        | undefined;
                                                }
                                            >;
                                            notice: zod.ZodString;
                                            start_timestamp: zod.ZodString;
                                            end_timestamp: zod.ZodString;
                                            output_format_version: zod.ZodString;
                                            duration: zod.ZodNumber;
                                            message: zod.ZodNullable<zod.ZodString>;
                                            errors: zod.ZodArray<
                                                zod.ZodUnknown,
                                                "many"
                                            >;
                                            warnings: zod.ZodArray<
                                                zod.ZodUnknown,
                                                "many"
                                            >;
                                            extra_data: zod.ZodObject<
                                                {
                                                    system_environment: zod.ZodObject<
                                                        {
                                                            operating_system: zod.ZodString;
                                                            cpu_architecture: zod.ZodString;
                                                            platform: zod.ZodString;
                                                            platform_version: zod.ZodString;
                                                            python_version: zod.ZodString;
                                                        },
                                                        "strip",
                                                        zod.ZodTypeAny,
                                                        {
                                                            operating_system: string;
                                                            cpu_architecture: string;
                                                            platform: string;
                                                            platform_version: string;
                                                            python_version: string;
                                                        },
                                                        {
                                                            operating_system: string;
                                                            cpu_architecture: string;
                                                            platform: string;
                                                            platform_version: string;
                                                            python_version: string;
                                                        }
                                                    >;
                                                    spdx_license_list_version: zod.ZodString;
                                                    files_count: zod.ZodNumber;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    system_environment: {
                                                        operating_system: string;
                                                        cpu_architecture: string;
                                                        platform: string;
                                                        platform_version: string;
                                                        python_version: string;
                                                    };
                                                    spdx_license_list_version: string;
                                                    files_count: number;
                                                },
                                                {
                                                    system_environment: {
                                                        operating_system: string;
                                                        cpu_architecture: string;
                                                        platform: string;
                                                        platform_version: string;
                                                        python_version: string;
                                                    };
                                                    spdx_license_list_version: string;
                                                    files_count: number;
                                                }
                                            >;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            message: string | null;
                                            options: {
                                                "--copyright": boolean;
                                                "--info": boolean;
                                                "--license": boolean;
                                                "--json"?: string | undefined;
                                                "--json-pp"?:
                                                    | string
                                                    | undefined;
                                                "--package"?:
                                                    | boolean
                                                    | undefined;
                                            };
                                            tool_name: string;
                                            tool_version: string;
                                            notice: string;
                                            start_timestamp: string;
                                            end_timestamp: string;
                                            output_format_version: string;
                                            duration: number;
                                            errors: unknown[];
                                            warnings: unknown[];
                                            extra_data: {
                                                system_environment: {
                                                    operating_system: string;
                                                    cpu_architecture: string;
                                                    platform: string;
                                                    platform_version: string;
                                                    python_version: string;
                                                };
                                                spdx_license_list_version: string;
                                                files_count: number;
                                            };
                                        },
                                        {
                                            message: string | null;
                                            options: {
                                                "--copyright": boolean;
                                                "--info": boolean;
                                                "--license": boolean;
                                                "--json"?: string | undefined;
                                                "--json-pp"?:
                                                    | string
                                                    | undefined;
                                                "--package"?:
                                                    | boolean
                                                    | undefined;
                                            };
                                            tool_name: string;
                                            tool_version: string;
                                            notice: string;
                                            start_timestamp: string;
                                            end_timestamp: string;
                                            output_format_version: string;
                                            duration: number;
                                            errors: unknown[];
                                            warnings: unknown[];
                                            extra_data: {
                                                system_environment: {
                                                    operating_system: string;
                                                    cpu_architecture: string;
                                                    platform: string;
                                                    platform_version: string;
                                                    python_version: string;
                                                };
                                                spdx_license_list_version: string;
                                                files_count: number;
                                            };
                                        }
                                    >,
                                    "many"
                                >;
                                files: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            path: zod.ZodString;
                                            type: zod.ZodString;
                                            sha256: zod.ZodNullable<zod.ZodString>;
                                            detected_license_expression: zod.ZodNullable<zod.ZodString>;
                                            detected_license_expression_spdx: zod.ZodNullable<zod.ZodString>;
                                            license_detections: zod.ZodArray<
                                                zod.ZodObject<
                                                    {
                                                        license_expression: zod.ZodString;
                                                        matches: zod.ZodArray<
                                                            zod.ZodObject<
                                                                {
                                                                    score: zod.ZodNumber;
                                                                    start_line: zod.ZodNumber;
                                                                    end_line: zod.ZodNumber;
                                                                    license_expression: zod.ZodString;
                                                                },
                                                                "strip",
                                                                zod.ZodTypeAny,
                                                                {
                                                                    license_expression: string;
                                                                    score: number;
                                                                    start_line: number;
                                                                    end_line: number;
                                                                },
                                                                {
                                                                    license_expression: string;
                                                                    score: number;
                                                                    start_line: number;
                                                                    end_line: number;
                                                                }
                                                            >,
                                                            "many"
                                                        >;
                                                    },
                                                    "strip",
                                                    zod.ZodTypeAny,
                                                    {
                                                        license_expression: string;
                                                        matches: {
                                                            license_expression: string;
                                                            score: number;
                                                            start_line: number;
                                                            end_line: number;
                                                        }[];
                                                    },
                                                    {
                                                        license_expression: string;
                                                        matches: {
                                                            license_expression: string;
                                                            score: number;
                                                            start_line: number;
                                                            end_line: number;
                                                        }[];
                                                    }
                                                >,
                                                "many"
                                            >;
                                            copyrights: zod.ZodArray<
                                                zod.ZodObject<
                                                    {
                                                        copyright: zod.ZodString;
                                                        start_line: zod.ZodNumber;
                                                        end_line: zod.ZodNumber;
                                                    },
                                                    "strip",
                                                    zod.ZodTypeAny,
                                                    {
                                                        start_line: number;
                                                        end_line: number;
                                                        copyright: string;
                                                    },
                                                    {
                                                        start_line: number;
                                                        end_line: number;
                                                        copyright: string;
                                                    }
                                                >,
                                                "many"
                                            >;
                                            scan_errors: zod.ZodArray<
                                                zod.ZodString,
                                                "many"
                                            >;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            path: string;
                                            type: string;
                                            sha256: string | null;
                                            detected_license_expression:
                                                | string
                                                | null;
                                            detected_license_expression_spdx:
                                                | string
                                                | null;
                                            license_detections: {
                                                license_expression: string;
                                                matches: {
                                                    license_expression: string;
                                                    score: number;
                                                    start_line: number;
                                                    end_line: number;
                                                }[];
                                            }[];
                                            copyrights: {
                                                start_line: number;
                                                end_line: number;
                                                copyright: string;
                                            }[];
                                            scan_errors: string[];
                                        },
                                        {
                                            path: string;
                                            type: string;
                                            sha256: string | null;
                                            detected_license_expression:
                                                | string
                                                | null;
                                            detected_license_expression_spdx:
                                                | string
                                                | null;
                                            license_detections: {
                                                license_expression: string;
                                                matches: {
                                                    license_expression: string;
                                                    score: number;
                                                    start_line: number;
                                                    end_line: number;
                                                }[];
                                            }[];
                                            copyrights: {
                                                start_line: number;
                                                end_line: number;
                                                copyright: string;
                                            }[];
                                            scan_errors: string[];
                                        }
                                    >,
                                    "many"
                                >;
                            },
                            "strip",
                            zod.ZodTypeAny,
                            {
                                files: {
                                    path: string;
                                    type: string;
                                    sha256: string | null;
                                    detected_license_expression: string | null;
                                    detected_license_expression_spdx:
                                        | string
                                        | null;
                                    license_detections: {
                                        license_expression: string;
                                        matches: {
                                            license_expression: string;
                                            score: number;
                                            start_line: number;
                                            end_line: number;
                                        }[];
                                    }[];
                                    copyrights: {
                                        start_line: number;
                                        end_line: number;
                                        copyright: string;
                                    }[];
                                    scan_errors: string[];
                                }[];
                                headers: {
                                    message: string | null;
                                    options: {
                                        "--copyright": boolean;
                                        "--info": boolean;
                                        "--license": boolean;
                                        "--json"?: string | undefined;
                                        "--json-pp"?: string | undefined;
                                        "--package"?: boolean | undefined;
                                    };
                                    tool_name: string;
                                    tool_version: string;
                                    notice: string;
                                    start_timestamp: string;
                                    end_timestamp: string;
                                    output_format_version: string;
                                    duration: number;
                                    errors: unknown[];
                                    warnings: unknown[];
                                    extra_data: {
                                        system_environment: {
                                            operating_system: string;
                                            cpu_architecture: string;
                                            platform: string;
                                            platform_version: string;
                                            python_version: string;
                                        };
                                        spdx_license_list_version: string;
                                        files_count: number;
                                    };
                                }[];
                            },
                            {
                                files: {
                                    path: string;
                                    type: string;
                                    sha256: string | null;
                                    detected_license_expression: string | null;
                                    detected_license_expression_spdx:
                                        | string
                                        | null;
                                    license_detections: {
                                        license_expression: string;
                                        matches: {
                                            license_expression: string;
                                            score: number;
                                            start_line: number;
                                            end_line: number;
                                        }[];
                                    }[];
                                    copyrights: {
                                        start_line: number;
                                        end_line: number;
                                        copyright: string;
                                    }[];
                                    scan_errors: string[];
                                }[];
                                headers: {
                                    message: string | null;
                                    options: {
                                        "--copyright": boolean;
                                        "--info": boolean;
                                        "--license": boolean;
                                        "--json"?: string | undefined;
                                        "--json-pp"?: string | undefined;
                                        "--package"?: boolean | undefined;
                                    };
                                    tool_name: string;
                                    tool_version: string;
                                    notice: string;
                                    start_timestamp: string;
                                    end_timestamp: string;
                                    output_format_version: string;
                                    duration: number;
                                    errors: unknown[];
                                    warnings: unknown[];
                                    extra_data: {
                                        system_environment: {
                                            operating_system: string;
                                            cpu_architecture: string;
                                            platform: string;
                                            platform_version: string;
                                            python_version: string;
                                        };
                                        spdx_license_list_version: string;
                                        files_count: number;
                                    };
                                }[];
                            }
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        id: string;
                        result: {
                            files: {
                                path: string;
                                type: string;
                                sha256: string | null;
                                detected_license_expression: string | null;
                                detected_license_expression_spdx: string | null;
                                license_detections: {
                                    license_expression: string;
                                    matches: {
                                        license_expression: string;
                                        score: number;
                                        start_line: number;
                                        end_line: number;
                                    }[];
                                }[];
                                copyrights: {
                                    start_line: number;
                                    end_line: number;
                                    copyright: string;
                                }[];
                                scan_errors: string[];
                            }[];
                            headers: {
                                message: string | null;
                                options: {
                                    "--copyright": boolean;
                                    "--info": boolean;
                                    "--license": boolean;
                                    "--json"?: string | undefined;
                                    "--json-pp"?: string | undefined;
                                    "--package"?: boolean | undefined;
                                };
                                tool_name: string;
                                tool_version: string;
                                notice: string;
                                start_timestamp: string;
                                end_timestamp: string;
                                output_format_version: string;
                                duration: number;
                                errors: unknown[];
                                warnings: unknown[];
                                extra_data: {
                                    system_environment: {
                                        operating_system: string;
                                        cpu_architecture: string;
                                        platform: string;
                                        platform_version: string;
                                        python_version: string;
                                    };
                                    spdx_license_list_version: string;
                                    files_count: number;
                                };
                            }[];
                        };
                    },
                    {
                        id: string;
                        result: {
                            files: {
                                path: string;
                                type: string;
                                sha256: string | null;
                                detected_license_expression: string | null;
                                detected_license_expression_spdx: string | null;
                                license_detections: {
                                    license_expression: string;
                                    matches: {
                                        license_expression: string;
                                        score: number;
                                        start_line: number;
                                        end_line: number;
                                    }[];
                                }[];
                                copyrights: {
                                    start_line: number;
                                    end_line: number;
                                    copyright: string;
                                }[];
                                scan_errors: string[];
                            }[];
                            headers: {
                                message: string | null;
                                options: {
                                    "--copyright": boolean;
                                    "--info": boolean;
                                    "--license": boolean;
                                    "--json"?: string | undefined;
                                    "--json-pp"?: string | undefined;
                                    "--package"?: boolean | undefined;
                                };
                                tool_name: string;
                                tool_version: string;
                                notice: string;
                                start_timestamp: string;
                                end_timestamp: string;
                                output_format_version: string;
                                duration: number;
                                errors: unknown[];
                                warnings: unknown[];
                                extra_data: {
                                    system_environment: {
                                        operating_system: string;
                                        cpu_architecture: string;
                                        platform: string;
                                        platform_version: string;
                                        python_version: string;
                                    };
                                    spdx_license_list_version: string;
                                    files_count: number;
                                };
                            }[];
                        };
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
];

declare const userAPI: [
    {
        method: "get";
        path: "/user";
        description: "Get user";
        alias: "GetUser";
        response: zod.ZodObject<
            {
                username: zod.ZodString;
                role: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                username: string;
                role: string;
            },
            {
                username: string;
                role: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/user";
        description: "Update user data (for users to update their own data)";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        username: zod.ZodOptional<
                            zod.ZodEffects<
                                zod.ZodEffects<
                                    zod.ZodEffects<
                                        zod.ZodString,
                                        string,
                                        string
                                    >,
                                    string,
                                    string
                                >,
                                string,
                                string
                            >
                        >;
                        password: zod.ZodOptional<
                            zod.ZodEffects<zod.ZodString, string, string>
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        username?: string | undefined;
                        password?: string | undefined;
                    },
                    {
                        username?: string | undefined;
                        password?: string | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/token";
        description: "Get new personal token for using DOS Scanner with ORT or through the API";
        response: zod.ZodObject<
            {
                token: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                token: string;
            },
            {
                token: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/license-conclusions";
        alias: "GetLicenseConclusions";
        description: "Get license conclusions";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "contextPurl",
                            "username",
                            "detectedLicenseExpressionSPDX",
                            "concludedLicenseExpressionSPDX",
                            "comment",
                            "local",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "bulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
                description: string;
            },
            {
                name: "hasBulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            local: zod.ZodBoolean;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                            bulkConclusionId: zod.ZodNullable<zod.ZodNumber>;
                            sha256: zod.ZodString;
                            contextPurl: zod.ZodString;
                            affectedPaths: zod.ZodObject<
                                {
                                    inContextPurl: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                path: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                path: string;
                                            },
                                            {
                                                path: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                    additionalMatches: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                path: zod.ZodString;
                                                purl: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                path: string;
                                                purl: string;
                                            },
                                            {
                                                path: string;
                                                purl: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                    inQueryPurl: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                path: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                path: string;
                                            },
                                            {
                                                path: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    inContextPurl: {
                                        path: string;
                                    }[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                    inQueryPurl: {
                                        path: string;
                                    }[];
                                },
                                {
                                    inContextPurl: {
                                        path: string;
                                    }[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                    inQueryPurl: {
                                        path: string;
                                    }[];
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            sha256: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                            affectedPaths: {
                                inContextPurl: {
                                    path: string;
                                }[];
                                additionalMatches: {
                                    path: string;
                                    purl: string;
                                }[];
                                inQueryPurl: {
                                    path: string;
                                }[];
                            };
                        },
                        {
                            id: number;
                            sha256: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                            affectedPaths: {
                                inContextPurl: {
                                    path: string;
                                }[];
                                additionalMatches: {
                                    path: string;
                                    purl: string;
                                }[];
                                inQueryPurl: {
                                    path: string;
                                }[];
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    id: number;
                    sha256: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                    affectedPaths: {
                        inContextPurl: {
                            path: string;
                        }[];
                        additionalMatches: {
                            path: string;
                            purl: string;
                        }[];
                        inQueryPurl: {
                            path: string;
                        }[];
                    };
                }[];
            },
            {
                licenseConclusions: {
                    id: number;
                    sha256: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                    affectedPaths: {
                        inContextPurl: {
                            path: string;
                        }[];
                        additionalMatches: {
                            path: string;
                            purl: string;
                        }[];
                        inQueryPurl: {
                            path: string;
                        }[];
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/license-conclusions/count";
        alias: "GetLicenseConclusionsCount";
        description: "Get count of license conclusions";
        parameters: [
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "bulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
                description: string;
            },
            {
                name: "hasBulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages/:purl/files/:sha256/license-conclusions/";
        description: "Get license conclusions for specified file in specified package";
        alias: "GetLicenseConclusionsForFileInPackage";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "sha256";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            local: zod.ZodBoolean;
                            contextPurl: zod.ZodString;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                            bulkConclusionId: zod.ZodNullable<zod.ZodNumber>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                        },
                        {
                            id: number;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    id: number;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                }[];
            },
            {
                licenseConclusions: {
                    id: number;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/packages/:purl/files/:sha256/license-conclusions";
        description: "Add a new license conclusion";
        alias: "PostLicenseConclusion";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "sha256";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        concludedLicenseExpressionSPDX: zod.ZodUnion<
                            [
                                zod.ZodEffects<zod.ZodString, string, string>,
                                zod.ZodEnum<["NONE", "NOASSERTION"]>,
                            ]
                        >;
                        detectedLicenseExpressionSPDX: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                        comment: zod.ZodOptional<zod.ZodString>;
                        local: zod.ZodOptional<zod.ZodBoolean>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        concludedLicenseExpressionSPDX: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        concludedLicenseExpressionSPDX: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusionId: zod.ZodNumber;
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                licenseConclusionId: number;
            },
            {
                message: string;
                licenseConclusionId: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/license-conclusions/:id";
        description: "Edit a license conclusion";
        alias: "PutLicenseConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodEffects<
                    zod.ZodObject<
                        {
                            concludedLicenseExpressionSPDX: zod.ZodOptional<
                                zod.ZodUnion<
                                    [
                                        zod.ZodEffects<
                                            zod.ZodString,
                                            string,
                                            string
                                        >,
                                        zod.ZodEnum<["NONE", "NOASSERTION"]>,
                                    ]
                                >
                            >;
                            detectedLicenseExpressionSPDX: zod.ZodOptional<zod.ZodString>;
                            comment: zod.ZodOptional<
                                zod.ZodNullable<zod.ZodString>
                            >;
                            local: zod.ZodOptional<zod.ZodBoolean>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            concludedLicenseExpressionSPDX?: string | undefined;
                            detectedLicenseExpressionSPDX?: string | undefined;
                            comment?: string | null | undefined;
                            local?: boolean | undefined;
                        },
                        {
                            concludedLicenseExpressionSPDX?: string | undefined;
                            detectedLicenseExpressionSPDX?: string | undefined;
                            comment?: string | null | undefined;
                            local?: boolean | undefined;
                        }
                    >,
                    {
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/license-conclusions/:id";
        description: "Delete a license conclusion";
        alias: "DeleteLicenseConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages/:purl/bulk-conclusions";
        description: "Get bulk conclusions for specified purl";
        alias: "GetBulkConclusionsByPurl";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                bulkConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            local: zod.ZodBoolean;
                            licenseConclusions: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        id: zod.ZodNumber;
                                        file: zod.ZodObject<
                                            {
                                                sha256: zod.ZodString;
                                                filetrees: zod.ZodArray<
                                                    zod.ZodObject<
                                                        {
                                                            path: zod.ZodString;
                                                        },
                                                        "strip",
                                                        zod.ZodTypeAny,
                                                        {
                                                            path: string;
                                                        },
                                                        {
                                                            path: string;
                                                        }
                                                    >,
                                                    "many"
                                                >;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                sha256: string;
                                                filetrees: {
                                                    path: string;
                                                }[];
                                            },
                                            {
                                                sha256: string;
                                                filetrees: {
                                                    path: string;
                                                }[];
                                            }
                                        >;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        id: number;
                                        file: {
                                            sha256: string;
                                            filetrees: {
                                                path: string;
                                            }[];
                                        };
                                    },
                                    {
                                        id: number;
                                        file: {
                                            sha256: string;
                                            filetrees: {
                                                path: string;
                                            }[];
                                        };
                                    }
                                >,
                                "many"
                            >;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                file: {
                                    sha256: string;
                                    filetrees: {
                                        path: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        },
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                file: {
                                    sha256: string;
                                    filetrees: {
                                        path: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        file: {
                            sha256: string;
                            filetrees: {
                                path: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            },
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        file: {
                            sha256: string;
                            filetrees: {
                                path: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/packages/:purl/bulk-conclusions";
        description: "Add a new bulk conclusion";
        alias: "PostBulkConclusion";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodEffects<zod.ZodString, string, string>;
                        concludedLicenseExpressionSPDX: zod.ZodUnion<
                            [
                                zod.ZodEffects<zod.ZodString, string, string>,
                                zod.ZodEnum<["NONE", "NOASSERTION"]>,
                            ]
                        >;
                        detectedLicenseExpressionSPDX: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                        comment: zod.ZodOptional<zod.ZodString>;
                        local: zod.ZodOptional<zod.ZodBoolean>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        concludedLicenseExpressionSPDX: string;
                        pattern: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        concludedLicenseExpressionSPDX: string;
                        pattern: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                bulkConclusionId: zod.ZodNumber;
                matchedPathsCount: zod.ZodNumber;
                addedLicenseConclusionsCount: zod.ZodNumber;
                affectedFilesInPackageCount: zod.ZodNumber;
                affectedFilesAcrossAllPackagesCount: zod.ZodNumber;
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                bulkConclusionId: number;
                matchedPathsCount: number;
                addedLicenseConclusionsCount: number;
                affectedFilesInPackageCount: number;
                affectedFilesAcrossAllPackagesCount: number;
            },
            {
                message: string;
                bulkConclusionId: number;
                matchedPathsCount: number;
                addedLicenseConclusionsCount: number;
                affectedFilesInPackageCount: number;
                affectedFilesAcrossAllPackagesCount: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/bulk-conclusions";
        description: "Get bulk conclusions";
        alias: "GetBulkConclusions";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "pkg",
                            "username",
                            "pattern",
                            "detectedLicenseExpressionSPDX",
                            "concludedLicenseExpressionSPDX",
                            "comment",
                            "local",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                bulkConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodNullable<zod.ZodString>;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            contextPurl: zod.ZodString;
                            local: zod.ZodBoolean;
                            licenseConclusions: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        id: zod.ZodNumber;
                                        sha256: zod.ZodString;
                                        affectedPaths: zod.ZodObject<
                                            {
                                                inContextPurl: zod.ZodArray<
                                                    zod.ZodString,
                                                    "many"
                                                >;
                                                additionalMatches: zod.ZodArray<
                                                    zod.ZodObject<
                                                        {
                                                            path: zod.ZodString;
                                                            purl: zod.ZodString;
                                                        },
                                                        "strip",
                                                        zod.ZodTypeAny,
                                                        {
                                                            path: string;
                                                            purl: string;
                                                        },
                                                        {
                                                            path: string;
                                                            purl: string;
                                                        }
                                                    >,
                                                    "many"
                                                >;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                inContextPurl: string[];
                                                additionalMatches: {
                                                    path: string;
                                                    purl: string;
                                                }[];
                                            },
                                            {
                                                inContextPurl: string[];
                                                additionalMatches: {
                                                    path: string;
                                                    purl: string;
                                                }[];
                                            }
                                        >;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        id: number;
                                        sha256: string;
                                        affectedPaths: {
                                            inContextPurl: string[];
                                            additionalMatches: {
                                                path: string;
                                                purl: string;
                                            }[];
                                        };
                                    },
                                    {
                                        id: number;
                                        sha256: string;
                                        affectedPaths: {
                                            inContextPurl: string[];
                                            additionalMatches: {
                                                path: string;
                                                purl: string;
                                            }[];
                                        };
                                    }
                                >,
                                "many"
                            >;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                sha256: string;
                                affectedPaths: {
                                    inContextPurl: string[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        },
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                sha256: string;
                                affectedPaths: {
                                    inContextPurl: string[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        sha256: string;
                        affectedPaths: {
                            inContextPurl: string[];
                            additionalMatches: {
                                path: string;
                                purl: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            },
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        sha256: string;
                        affectedPaths: {
                            inContextPurl: string[];
                            additionalMatches: {
                                path: string;
                                purl: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/bulk-conclusions/count";
        description: "Get count of bulk conclusions";
        alias: "GetBulkConclusionsCount";
        parameters: [
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "purlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/bulk-conclusions/:id";
        description: "Get bulk conclusion by id";
        alias: "GetBulkConclusionById";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                pattern: zod.ZodNullable<zod.ZodString>;
                concludedLicenseExpressionSPDX: zod.ZodString;
                detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                comment: zod.ZodNullable<zod.ZodString>;
                local: zod.ZodBoolean;
                filePaths: zod.ZodArray<zod.ZodString, "many">;
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                        },
                        {
                            id: number;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    id: number;
                }[];
                detectedLicenseExpressionSPDX: string | null;
                concludedLicenseExpressionSPDX: string;
                comment: string | null;
                pattern: string | null;
                local: boolean;
                filePaths: string[];
            },
            {
                licenseConclusions: {
                    id: number;
                }[];
                detectedLicenseExpressionSPDX: string | null;
                concludedLicenseExpressionSPDX: string;
                comment: string | null;
                pattern: string | null;
                local: boolean;
                filePaths: string[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/bulk-conclusions/:id";
        description: "Edit bulk conclusion";
        alias: "PutBulkConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodOptional<zod.ZodString>;
                        concludedLicenseExpressionSPDX: zod.ZodOptional<
                            zod.ZodUnion<
                                [
                                    zod.ZodEffects<
                                        zod.ZodString,
                                        string,
                                        string
                                    >,
                                    zod.ZodEnum<["NONE", "NOASSERTION"]>,
                                ]
                            >
                        >;
                        detectedLicenseExpressionSPDX: zod.ZodOptional<zod.ZodString>;
                        comment: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                        local: zod.ZodOptional<zod.ZodBoolean>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        pattern?: string | undefined;
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        pattern?: string | undefined;
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/bulk-conclusions/:id";
        description: "Delete a bulk conclusion";
        alias: "DeleteBulkConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/path-exclusions";
        description: "Get path exclusions";
        alias: "GetPathExclusions";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "pkg",
                            "pattern",
                            "reason",
                            "comment",
                            "username",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "reason";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                pathExclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodString;
                            reason: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                            package: zod.ZodObject<
                                {
                                    purl: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    purl: string;
                                },
                                {
                                    purl: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            package: {
                                purl: string;
                            };
                        },
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            package: {
                                purl: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    package: {
                        purl: string;
                    };
                }[];
            },
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    package: {
                        purl: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/path-exclusions/count";
        description: "Get count of path exclusions";
        alias: "GetPathExclusionsCount";
        parameters: [
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "purlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "reason";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/path-exclusions/:id/affected-files";
        description: "Get affected files for specified path exclusion";
        alias: "GetAffectedFilesForPathExclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                affectedFiles: zod.ZodArray<zod.ZodString, "many">;
            },
            "strip",
            zod.ZodTypeAny,
            {
                affectedFiles: string[];
            },
            {
                affectedFiles: string[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/path-exclusions/:id";
        description: "Edit a path exclusion";
        alias: "PutPathExclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodOptional<zod.ZodString>;
                        reason: zod.ZodOptional<
                            zod.ZodEffects<zod.ZodString, string, string>
                        >;
                        comment: zod.ZodOptional<zod.ZodString>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        pattern?: string | undefined;
                        reason?: string | undefined;
                        comment?: string | undefined;
                    },
                    {
                        pattern?: string | undefined;
                        reason?: string | undefined;
                        comment?: string | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/packages/:purl/path-exclusions";
        description: "Add a new path exclusion";
        alias: "PostPathExclusion";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodString;
                        reason: zod.ZodEffects<zod.ZodString, string, string>;
                        comment: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        pattern: string;
                        reason: string;
                        comment?: string | null | undefined;
                    },
                    {
                        pattern: string;
                        reason: string;
                        comment?: string | null | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                pathExclusionId: zod.ZodNumber;
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                pathExclusionId: number;
            },
            {
                message: string;
                pathExclusionId: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/path-exclusions/:id";
        description: "Delete a path exclusion";
        alias: "DeletePathExclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages/:purl/path-exclusions";
        description: "Get path exclusions for specified purl";
        alias: "GetPathExclusionsByPurl";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                pathExclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodString;
                            reason: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        },
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            },
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages/:purl/filetrees";
        alias: "GetFileTree";
        description: "Get file tree for specified purl";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                filetrees: zod.ZodArray<
                    zod.ZodObject<
                        {
                            path: zod.ZodString;
                            packageId: zod.ZodNumber;
                            fileSha256: zod.ZodString;
                            file: zod.ZodObject<
                                {
                                    licenseFindings: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                licenseExpressionSPDX: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                licenseExpressionSPDX: string;
                                            },
                                            {
                                                licenseExpressionSPDX: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                    licenseConclusions: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                concludedLicenseExpressionSPDX: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                concludedLicenseExpressionSPDX: string;
                                            },
                                            {
                                                concludedLicenseExpressionSPDX: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    licenseConclusions: {
                                        concludedLicenseExpressionSPDX: string;
                                    }[];
                                    licenseFindings: {
                                        licenseExpressionSPDX: string;
                                    }[];
                                },
                                {
                                    licenseConclusions: {
                                        concludedLicenseExpressionSPDX: string;
                                    }[];
                                    licenseFindings: {
                                        licenseExpressionSPDX: string;
                                    }[];
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            path: string;
                            file: {
                                licenseConclusions: {
                                    concludedLicenseExpressionSPDX: string;
                                }[];
                                licenseFindings: {
                                    licenseExpressionSPDX: string;
                                }[];
                            };
                            packageId: number;
                            fileSha256: string;
                        },
                        {
                            path: string;
                            file: {
                                licenseConclusions: {
                                    concludedLicenseExpressionSPDX: string;
                                }[];
                                licenseFindings: {
                                    licenseExpressionSPDX: string;
                                }[];
                            };
                            packageId: number;
                            fileSha256: string;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                filetrees: {
                    path: string;
                    file: {
                        licenseConclusions: {
                            concludedLicenseExpressionSPDX: string;
                        }[];
                        licenseFindings: {
                            licenseExpressionSPDX: string;
                        }[];
                    };
                    packageId: number;
                    fileSha256: string;
                }[];
            },
            {
                filetrees: {
                    path: string;
                    file: {
                        licenseConclusions: {
                            concludedLicenseExpressionSPDX: string;
                        }[];
                        licenseFindings: {
                            licenseExpressionSPDX: string;
                        }[];
                    };
                    packageId: number;
                    fileSha256: string;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages";
        description: "Get packages";
        alias: "GetPackages";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "purl",
                            "name",
                            "version",
                            "type",
                            "namespace",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "name";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "namespace";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "version";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "type";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                packages: zod.ZodArray<
                    zod.ZodObject<
                        {
                            purl: zod.ZodString;
                            updatedAt: zod.ZodDate;
                            name: zod.ZodString;
                            version: zod.ZodNullable<zod.ZodString>;
                            type: zod.ZodString;
                            namespace: zod.ZodNullable<zod.ZodString>;
                            qualifiers: zod.ZodNullable<zod.ZodString>;
                            subpath: zod.ZodNullable<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            type: string;
                            name: string;
                            purl: string;
                            updatedAt: Date;
                            version: string | null;
                            namespace: string | null;
                            qualifiers: string | null;
                            subpath: string | null;
                        },
                        {
                            type: string;
                            name: string;
                            purl: string;
                            updatedAt: Date;
                            version: string | null;
                            namespace: string | null;
                            qualifiers: string | null;
                            subpath: string | null;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                packages: {
                    type: string;
                    name: string;
                    purl: string;
                    updatedAt: Date;
                    version: string | null;
                    namespace: string | null;
                    qualifiers: string | null;
                    subpath: string | null;
                }[];
            },
            {
                packages: {
                    type: string;
                    name: string;
                    purl: string;
                    updatedAt: Date;
                    version: string | null;
                    namespace: string | null;
                    qualifiers: string | null;
                    subpath: string | null;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages/count";
        description: "Get packages count";
        alias: "GetPackagesCount";
        parameters: [
            {
                name: "name";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "namespace";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "version";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "type";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/packages/:purl/filetrees/:path/files";
        alias: "GetFile";
        description: "Get file sha256 and S3 download url for file in path in package";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "path";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                sha256: zod.ZodString;
                downloadUrl: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                sha256: string;
                downloadUrl: string;
            },
            {
                sha256: string;
                downloadUrl: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/files/:sha256/license-findings";
        alias: "GetLicenseFindingsForFile";
        description: "Get license findings for specified file";
        parameters: [
            {
                name: "sha256";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                licenseFindings: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            createdAt: zod.ZodDate;
                            updatedAt: zod.ZodDate;
                            licenseExpressionSPDX: zod.ZodString;
                            scanner: zod.ZodString;
                            scannerConfig: zod.ZodString;
                            licenseFindingMatches: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        id: zod.ZodNumber;
                                        createdAt: zod.ZodDate;
                                        updatedAt: zod.ZodDate;
                                        licenseExpression: zod.ZodNullable<zod.ZodString>;
                                        startLine: zod.ZodNumber;
                                        endLine: zod.ZodNumber;
                                        score: zod.ZodNumber;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        id: number;
                                        score: number;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        licenseExpression: string | null;
                                        startLine: number;
                                        endLine: number;
                                    },
                                    {
                                        id: number;
                                        score: number;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        licenseExpression: string | null;
                                        startLine: number;
                                        endLine: number;
                                    }
                                >,
                                "many"
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            licenseExpressionSPDX: string;
                            scanner: string;
                            scannerConfig: string;
                            licenseFindingMatches: {
                                id: number;
                                score: number;
                                createdAt: Date;
                                updatedAt: Date;
                                licenseExpression: string | null;
                                startLine: number;
                                endLine: number;
                            }[];
                        },
                        {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            licenseExpressionSPDX: string;
                            scanner: string;
                            scannerConfig: string;
                            licenseFindingMatches: {
                                id: number;
                                score: number;
                                createdAt: Date;
                                updatedAt: Date;
                                licenseExpression: string | null;
                                startLine: number;
                                endLine: number;
                            }[];
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseFindings: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    licenseExpressionSPDX: string;
                    scanner: string;
                    scannerConfig: string;
                    licenseFindingMatches: {
                        id: number;
                        score: number;
                        createdAt: Date;
                        updatedAt: Date;
                        licenseExpression: string | null;
                        startLine: number;
                        endLine: number;
                    }[];
                }[];
            },
            {
                licenseFindings: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    licenseExpressionSPDX: string;
                    scanner: string;
                    scannerConfig: string;
                    licenseFindingMatches: {
                        id: number;
                        score: number;
                        createdAt: Date;
                        updatedAt: Date;
                        licenseExpression: string | null;
                        startLine: number;
                        endLine: number;
                    }[];
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
];

declare const dosAPI: [
    {
        method: "post";
        path: "/scan-results";
        description: string;
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        purls: zod.ZodArray<
                            zod.ZodEffects<zod.ZodString, string, string>,
                            "many"
                        >;
                        options: zod.ZodOptional<
                            zod.ZodObject<
                                {
                                    fetchConcluded: zod.ZodOptional<zod.ZodBoolean>;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    fetchConcluded?: boolean | undefined;
                                },
                                {
                                    fetchConcluded?: boolean | undefined;
                                }
                            >
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purls: string[];
                        options?:
                            | {
                                  fetchConcluded?: boolean | undefined;
                              }
                            | undefined;
                    },
                    {
                        purls: string[];
                        options?:
                            | {
                                  fetchConcluded?: boolean | undefined;
                              }
                            | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                purls: zod.ZodArray<
                    zod.ZodEffects<zod.ZodString, string, string>,
                    "many"
                >;
                state: zod.ZodObject<
                    {
                        status: zod.ZodEnum<["no-results", "pending", "ready"]>;
                        jobId: zod.ZodNullable<zod.ZodString>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        status: "no-results" | "pending" | "ready";
                        jobId: string | null;
                    },
                    {
                        status: "no-results" | "pending" | "ready";
                        jobId: string | null;
                    }
                >;
                results: zod.ZodUnion<
                    [
                        zod.ZodNull,
                        zod.ZodObject<
                            {
                                licenses: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            license: zod.ZodString;
                                            location: zod.ZodObject<
                                                {
                                                    path: zod.ZodString;
                                                    start_line: zod.ZodOptional<zod.ZodNumber>;
                                                    end_line: zod.ZodOptional<zod.ZodNumber>;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    path: string;
                                                    start_line?:
                                                        | number
                                                        | undefined;
                                                    end_line?:
                                                        | number
                                                        | undefined;
                                                },
                                                {
                                                    path: string;
                                                    start_line?:
                                                        | number
                                                        | undefined;
                                                    end_line?:
                                                        | number
                                                        | undefined;
                                                }
                                            >;
                                            score: zod.ZodOptional<zod.ZodNumber>;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            license: string;
                                            location: {
                                                path: string;
                                                start_line?: number | undefined;
                                                end_line?: number | undefined;
                                            };
                                            score?: number | undefined;
                                        },
                                        {
                                            license: string;
                                            location: {
                                                path: string;
                                                start_line?: number | undefined;
                                                end_line?: number | undefined;
                                            };
                                            score?: number | undefined;
                                        }
                                    >,
                                    "many"
                                >;
                                copyrights: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            statement: zod.ZodString;
                                            location: zod.ZodObject<
                                                {
                                                    path: zod.ZodString;
                                                    start_line: zod.ZodNumber;
                                                    end_line: zod.ZodNumber;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    path: string;
                                                    start_line: number;
                                                    end_line: number;
                                                },
                                                {
                                                    path: string;
                                                    start_line: number;
                                                    end_line: number;
                                                }
                                            >;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            location: {
                                                path: string;
                                                start_line: number;
                                                end_line: number;
                                            };
                                            statement: string;
                                        },
                                        {
                                            location: {
                                                path: string;
                                                start_line: number;
                                                end_line: number;
                                            };
                                            statement: string;
                                        }
                                    >,
                                    "many"
                                >;
                                issues: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            timestamp: zod.ZodDate;
                                            source: zod.ZodString;
                                            message: zod.ZodString;
                                            severity: zod.ZodString;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            message: string;
                                            timestamp: Date;
                                            source: string;
                                            severity: string;
                                        },
                                        {
                                            message: string;
                                            timestamp: Date;
                                            source: string;
                                            severity: string;
                                        }
                                    >,
                                    "many"
                                >;
                            },
                            "strip",
                            zod.ZodTypeAny,
                            {
                                copyrights: {
                                    location: {
                                        path: string;
                                        start_line: number;
                                        end_line: number;
                                    };
                                    statement: string;
                                }[];
                                licenses: {
                                    license: string;
                                    location: {
                                        path: string;
                                        start_line?: number | undefined;
                                        end_line?: number | undefined;
                                    };
                                    score?: number | undefined;
                                }[];
                                issues: {
                                    message: string;
                                    timestamp: Date;
                                    source: string;
                                    severity: string;
                                }[];
                            },
                            {
                                copyrights: {
                                    location: {
                                        path: string;
                                        start_line: number;
                                        end_line: number;
                                    };
                                    statement: string;
                                }[];
                                licenses: {
                                    license: string;
                                    location: {
                                        path: string;
                                        start_line?: number | undefined;
                                        end_line?: number | undefined;
                                    };
                                    score?: number | undefined;
                                }[];
                                issues: {
                                    message: string;
                                    timestamp: Date;
                                    source: string;
                                    severity: string;
                                }[];
                            }
                        >,
                    ]
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                state: {
                    status: "no-results" | "pending" | "ready";
                    jobId: string | null;
                };
                purls: string[];
                results: {
                    copyrights: {
                        location: {
                            path: string;
                            start_line: number;
                            end_line: number;
                        };
                        statement: string;
                    }[];
                    licenses: {
                        license: string;
                        location: {
                            path: string;
                            start_line?: number | undefined;
                            end_line?: number | undefined;
                        };
                        score?: number | undefined;
                    }[];
                    issues: {
                        message: string;
                        timestamp: Date;
                        source: string;
                        severity: string;
                    }[];
                } | null;
            },
            {
                state: {
                    status: "no-results" | "pending" | "ready";
                    jobId: string | null;
                };
                purls: string[];
                results: {
                    copyrights: {
                        location: {
                            path: string;
                            start_line: number;
                            end_line: number;
                        };
                        statement: string;
                    }[];
                    licenses: {
                        license: string;
                        location: {
                            path: string;
                            start_line?: number | undefined;
                            end_line?: number | undefined;
                        };
                        score?: number | undefined;
                    }[];
                    issues: {
                        message: string;
                        timestamp: Date;
                        source: string;
                        severity: string;
                    }[];
                } | null;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/package-configuration";
        description: "Get package configuration for specified purl";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        purl: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purl: string;
                    },
                    {
                        purl: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            path: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            path: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                        },
                        {
                            path: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                        }
                    >,
                    "many"
                >;
                pathExclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            pattern: zod.ZodString;
                            reason: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            comment: string | null;
                            pattern: string;
                            reason: string;
                        },
                        {
                            comment: string | null;
                            pattern: string;
                            reason: string;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    path: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                }[];
                pathExclusions: {
                    comment: string | null;
                    pattern: string;
                    reason: string;
                }[];
            },
            {
                licenseConclusions: {
                    path: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                }[];
                pathExclusions: {
                    comment: string | null;
                    pattern: string;
                    reason: string;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/upload-url";
        description: "Get presigned upload URL for S3 object storage with specified object key";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        key: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        key: string;
                    },
                    {
                        key: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                success: zod.ZodBoolean;
                presignedUrl: zod.ZodOptional<zod.ZodString>;
                message: zod.ZodOptional<zod.ZodString>;
            },
            "strip",
            zod.ZodTypeAny,
            {
                success: boolean;
                presignedUrl?: string | undefined;
                message?: string | undefined;
            },
            {
                success: boolean;
                presignedUrl?: string | undefined;
                message?: string | undefined;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/job";
        description: "Add new scanner job for specified purl(s). Give multiple purls in the case where these purls are all part of the same source.";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        zipFileKey: zod.ZodString;
                        purls: zod.ZodArray<
                            zod.ZodEffects<zod.ZodString, string, string>,
                            "many"
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purls: string[];
                        zipFileKey: string;
                    },
                    {
                        purls: string[];
                        zipFileKey: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                scannerJobId: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                scannerJobId: string;
            },
            {
                scannerJobId: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/job-state/:id";
        description: "Get state for scanner job with given id";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                state: zod.ZodObject<
                    {
                        status: zod.ZodString;
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        status: string;
                    },
                    {
                        message: string;
                        status: string;
                    }
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                state: {
                    message: string;
                    status: string;
                };
            },
            {
                state: {
                    message: string;
                    status: string;
                };
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/job-state/:id";
        description: "Edit scanner job state";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        state: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        state: string;
                    },
                    {
                        state: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/job-results";
        description: "Save scanner job results";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        id: zod.ZodString;
                        result: zod.ZodObject<
                            {
                                headers: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            tool_name: zod.ZodString;
                                            tool_version: zod.ZodString;
                                            options: zod.ZodObject<
                                                {
                                                    "--copyright": zod.ZodBoolean;
                                                    "--info": zod.ZodBoolean;
                                                    "--json": zod.ZodOptional<zod.ZodString>;
                                                    "--json-pp": zod.ZodOptional<zod.ZodString>;
                                                    "--license": zod.ZodBoolean;
                                                    "--package": zod.ZodOptional<zod.ZodBoolean>;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    "--copyright": boolean;
                                                    "--info": boolean;
                                                    "--license": boolean;
                                                    "--json"?:
                                                        | string
                                                        | undefined;
                                                    "--json-pp"?:
                                                        | string
                                                        | undefined;
                                                    "--package"?:
                                                        | boolean
                                                        | undefined;
                                                },
                                                {
                                                    "--copyright": boolean;
                                                    "--info": boolean;
                                                    "--license": boolean;
                                                    "--json"?:
                                                        | string
                                                        | undefined;
                                                    "--json-pp"?:
                                                        | string
                                                        | undefined;
                                                    "--package"?:
                                                        | boolean
                                                        | undefined;
                                                }
                                            >;
                                            notice: zod.ZodString;
                                            start_timestamp: zod.ZodString;
                                            end_timestamp: zod.ZodString;
                                            output_format_version: zod.ZodString;
                                            duration: zod.ZodNumber;
                                            message: zod.ZodNullable<zod.ZodString>;
                                            errors: zod.ZodArray<
                                                zod.ZodUnknown,
                                                "many"
                                            >;
                                            warnings: zod.ZodArray<
                                                zod.ZodUnknown,
                                                "many"
                                            >;
                                            extra_data: zod.ZodObject<
                                                {
                                                    system_environment: zod.ZodObject<
                                                        {
                                                            operating_system: zod.ZodString;
                                                            cpu_architecture: zod.ZodString;
                                                            platform: zod.ZodString;
                                                            platform_version: zod.ZodString;
                                                            python_version: zod.ZodString;
                                                        },
                                                        "strip",
                                                        zod.ZodTypeAny,
                                                        {
                                                            operating_system: string;
                                                            cpu_architecture: string;
                                                            platform: string;
                                                            platform_version: string;
                                                            python_version: string;
                                                        },
                                                        {
                                                            operating_system: string;
                                                            cpu_architecture: string;
                                                            platform: string;
                                                            platform_version: string;
                                                            python_version: string;
                                                        }
                                                    >;
                                                    spdx_license_list_version: zod.ZodString;
                                                    files_count: zod.ZodNumber;
                                                },
                                                "strip",
                                                zod.ZodTypeAny,
                                                {
                                                    system_environment: {
                                                        operating_system: string;
                                                        cpu_architecture: string;
                                                        platform: string;
                                                        platform_version: string;
                                                        python_version: string;
                                                    };
                                                    spdx_license_list_version: string;
                                                    files_count: number;
                                                },
                                                {
                                                    system_environment: {
                                                        operating_system: string;
                                                        cpu_architecture: string;
                                                        platform: string;
                                                        platform_version: string;
                                                        python_version: string;
                                                    };
                                                    spdx_license_list_version: string;
                                                    files_count: number;
                                                }
                                            >;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            message: string | null;
                                            options: {
                                                "--copyright": boolean;
                                                "--info": boolean;
                                                "--license": boolean;
                                                "--json"?: string | undefined;
                                                "--json-pp"?:
                                                    | string
                                                    | undefined;
                                                "--package"?:
                                                    | boolean
                                                    | undefined;
                                            };
                                            tool_name: string;
                                            tool_version: string;
                                            notice: string;
                                            start_timestamp: string;
                                            end_timestamp: string;
                                            output_format_version: string;
                                            duration: number;
                                            errors: unknown[];
                                            warnings: unknown[];
                                            extra_data: {
                                                system_environment: {
                                                    operating_system: string;
                                                    cpu_architecture: string;
                                                    platform: string;
                                                    platform_version: string;
                                                    python_version: string;
                                                };
                                                spdx_license_list_version: string;
                                                files_count: number;
                                            };
                                        },
                                        {
                                            message: string | null;
                                            options: {
                                                "--copyright": boolean;
                                                "--info": boolean;
                                                "--license": boolean;
                                                "--json"?: string | undefined;
                                                "--json-pp"?:
                                                    | string
                                                    | undefined;
                                                "--package"?:
                                                    | boolean
                                                    | undefined;
                                            };
                                            tool_name: string;
                                            tool_version: string;
                                            notice: string;
                                            start_timestamp: string;
                                            end_timestamp: string;
                                            output_format_version: string;
                                            duration: number;
                                            errors: unknown[];
                                            warnings: unknown[];
                                            extra_data: {
                                                system_environment: {
                                                    operating_system: string;
                                                    cpu_architecture: string;
                                                    platform: string;
                                                    platform_version: string;
                                                    python_version: string;
                                                };
                                                spdx_license_list_version: string;
                                                files_count: number;
                                            };
                                        }
                                    >,
                                    "many"
                                >;
                                files: zod.ZodArray<
                                    zod.ZodObject<
                                        {
                                            path: zod.ZodString;
                                            type: zod.ZodString;
                                            sha256: zod.ZodNullable<zod.ZodString>;
                                            detected_license_expression: zod.ZodNullable<zod.ZodString>;
                                            detected_license_expression_spdx: zod.ZodNullable<zod.ZodString>;
                                            license_detections: zod.ZodArray<
                                                zod.ZodObject<
                                                    {
                                                        license_expression: zod.ZodString;
                                                        matches: zod.ZodArray<
                                                            zod.ZodObject<
                                                                {
                                                                    score: zod.ZodNumber;
                                                                    start_line: zod.ZodNumber;
                                                                    end_line: zod.ZodNumber;
                                                                    license_expression: zod.ZodString;
                                                                },
                                                                "strip",
                                                                zod.ZodTypeAny,
                                                                {
                                                                    license_expression: string;
                                                                    score: number;
                                                                    start_line: number;
                                                                    end_line: number;
                                                                },
                                                                {
                                                                    license_expression: string;
                                                                    score: number;
                                                                    start_line: number;
                                                                    end_line: number;
                                                                }
                                                            >,
                                                            "many"
                                                        >;
                                                    },
                                                    "strip",
                                                    zod.ZodTypeAny,
                                                    {
                                                        license_expression: string;
                                                        matches: {
                                                            license_expression: string;
                                                            score: number;
                                                            start_line: number;
                                                            end_line: number;
                                                        }[];
                                                    },
                                                    {
                                                        license_expression: string;
                                                        matches: {
                                                            license_expression: string;
                                                            score: number;
                                                            start_line: number;
                                                            end_line: number;
                                                        }[];
                                                    }
                                                >,
                                                "many"
                                            >;
                                            copyrights: zod.ZodArray<
                                                zod.ZodObject<
                                                    {
                                                        copyright: zod.ZodString;
                                                        start_line: zod.ZodNumber;
                                                        end_line: zod.ZodNumber;
                                                    },
                                                    "strip",
                                                    zod.ZodTypeAny,
                                                    {
                                                        start_line: number;
                                                        end_line: number;
                                                        copyright: string;
                                                    },
                                                    {
                                                        start_line: number;
                                                        end_line: number;
                                                        copyright: string;
                                                    }
                                                >,
                                                "many"
                                            >;
                                            scan_errors: zod.ZodArray<
                                                zod.ZodString,
                                                "many"
                                            >;
                                        },
                                        "strip",
                                        zod.ZodTypeAny,
                                        {
                                            path: string;
                                            type: string;
                                            sha256: string | null;
                                            detected_license_expression:
                                                | string
                                                | null;
                                            detected_license_expression_spdx:
                                                | string
                                                | null;
                                            license_detections: {
                                                license_expression: string;
                                                matches: {
                                                    license_expression: string;
                                                    score: number;
                                                    start_line: number;
                                                    end_line: number;
                                                }[];
                                            }[];
                                            copyrights: {
                                                start_line: number;
                                                end_line: number;
                                                copyright: string;
                                            }[];
                                            scan_errors: string[];
                                        },
                                        {
                                            path: string;
                                            type: string;
                                            sha256: string | null;
                                            detected_license_expression:
                                                | string
                                                | null;
                                            detected_license_expression_spdx:
                                                | string
                                                | null;
                                            license_detections: {
                                                license_expression: string;
                                                matches: {
                                                    license_expression: string;
                                                    score: number;
                                                    start_line: number;
                                                    end_line: number;
                                                }[];
                                            }[];
                                            copyrights: {
                                                start_line: number;
                                                end_line: number;
                                                copyright: string;
                                            }[];
                                            scan_errors: string[];
                                        }
                                    >,
                                    "many"
                                >;
                            },
                            "strip",
                            zod.ZodTypeAny,
                            {
                                files: {
                                    path: string;
                                    type: string;
                                    sha256: string | null;
                                    detected_license_expression: string | null;
                                    detected_license_expression_spdx:
                                        | string
                                        | null;
                                    license_detections: {
                                        license_expression: string;
                                        matches: {
                                            license_expression: string;
                                            score: number;
                                            start_line: number;
                                            end_line: number;
                                        }[];
                                    }[];
                                    copyrights: {
                                        start_line: number;
                                        end_line: number;
                                        copyright: string;
                                    }[];
                                    scan_errors: string[];
                                }[];
                                headers: {
                                    message: string | null;
                                    options: {
                                        "--copyright": boolean;
                                        "--info": boolean;
                                        "--license": boolean;
                                        "--json"?: string | undefined;
                                        "--json-pp"?: string | undefined;
                                        "--package"?: boolean | undefined;
                                    };
                                    tool_name: string;
                                    tool_version: string;
                                    notice: string;
                                    start_timestamp: string;
                                    end_timestamp: string;
                                    output_format_version: string;
                                    duration: number;
                                    errors: unknown[];
                                    warnings: unknown[];
                                    extra_data: {
                                        system_environment: {
                                            operating_system: string;
                                            cpu_architecture: string;
                                            platform: string;
                                            platform_version: string;
                                            python_version: string;
                                        };
                                        spdx_license_list_version: string;
                                        files_count: number;
                                    };
                                }[];
                            },
                            {
                                files: {
                                    path: string;
                                    type: string;
                                    sha256: string | null;
                                    detected_license_expression: string | null;
                                    detected_license_expression_spdx:
                                        | string
                                        | null;
                                    license_detections: {
                                        license_expression: string;
                                        matches: {
                                            license_expression: string;
                                            score: number;
                                            start_line: number;
                                            end_line: number;
                                        }[];
                                    }[];
                                    copyrights: {
                                        start_line: number;
                                        end_line: number;
                                        copyright: string;
                                    }[];
                                    scan_errors: string[];
                                }[];
                                headers: {
                                    message: string | null;
                                    options: {
                                        "--copyright": boolean;
                                        "--info": boolean;
                                        "--license": boolean;
                                        "--json"?: string | undefined;
                                        "--json-pp"?: string | undefined;
                                        "--package"?: boolean | undefined;
                                    };
                                    tool_name: string;
                                    tool_version: string;
                                    notice: string;
                                    start_timestamp: string;
                                    end_timestamp: string;
                                    output_format_version: string;
                                    duration: number;
                                    errors: unknown[];
                                    warnings: unknown[];
                                    extra_data: {
                                        system_environment: {
                                            operating_system: string;
                                            cpu_architecture: string;
                                            platform: string;
                                            platform_version: string;
                                            python_version: string;
                                        };
                                        spdx_license_list_version: string;
                                        files_count: number;
                                    };
                                }[];
                            }
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        id: string;
                        result: {
                            files: {
                                path: string;
                                type: string;
                                sha256: string | null;
                                detected_license_expression: string | null;
                                detected_license_expression_spdx: string | null;
                                license_detections: {
                                    license_expression: string;
                                    matches: {
                                        license_expression: string;
                                        score: number;
                                        start_line: number;
                                        end_line: number;
                                    }[];
                                }[];
                                copyrights: {
                                    start_line: number;
                                    end_line: number;
                                    copyright: string;
                                }[];
                                scan_errors: string[];
                            }[];
                            headers: {
                                message: string | null;
                                options: {
                                    "--copyright": boolean;
                                    "--info": boolean;
                                    "--license": boolean;
                                    "--json"?: string | undefined;
                                    "--json-pp"?: string | undefined;
                                    "--package"?: boolean | undefined;
                                };
                                tool_name: string;
                                tool_version: string;
                                notice: string;
                                start_timestamp: string;
                                end_timestamp: string;
                                output_format_version: string;
                                duration: number;
                                errors: unknown[];
                                warnings: unknown[];
                                extra_data: {
                                    system_environment: {
                                        operating_system: string;
                                        cpu_architecture: string;
                                        platform: string;
                                        platform_version: string;
                                        python_version: string;
                                    };
                                    spdx_license_list_version: string;
                                    files_count: number;
                                };
                            }[];
                        };
                    },
                    {
                        id: string;
                        result: {
                            files: {
                                path: string;
                                type: string;
                                sha256: string | null;
                                detected_license_expression: string | null;
                                detected_license_expression_spdx: string | null;
                                license_detections: {
                                    license_expression: string;
                                    matches: {
                                        license_expression: string;
                                        score: number;
                                        start_line: number;
                                        end_line: number;
                                    }[];
                                }[];
                                copyrights: {
                                    start_line: number;
                                    end_line: number;
                                    copyright: string;
                                }[];
                                scan_errors: string[];
                            }[];
                            headers: {
                                message: string | null;
                                options: {
                                    "--copyright": boolean;
                                    "--info": boolean;
                                    "--license": boolean;
                                    "--json"?: string | undefined;
                                    "--json-pp"?: string | undefined;
                                    "--package"?: boolean | undefined;
                                };
                                tool_name: string;
                                tool_version: string;
                                notice: string;
                                start_timestamp: string;
                                end_timestamp: string;
                                output_format_version: string;
                                duration: number;
                                errors: unknown[];
                                warnings: unknown[];
                                extra_data: {
                                    system_environment: {
                                        operating_system: string;
                                        cpu_architecture: string;
                                        platform: string;
                                        platform_version: string;
                                        python_version: string;
                                    };
                                    spdx_license_list_version: string;
                                    files_count: number;
                                };
                            }[];
                        };
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/user";
        description: "Get user";
        alias: "GetUser";
        response: zod.ZodObject<
            {
                username: zod.ZodString;
                role: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                username: string;
                role: string;
            },
            {
                username: string;
                role: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/user/user";
        description: "Update user data (for users to update their own data)";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        username: zod.ZodOptional<
                            zod.ZodEffects<
                                zod.ZodEffects<
                                    zod.ZodEffects<
                                        zod.ZodString,
                                        string,
                                        string
                                    >,
                                    string,
                                    string
                                >,
                                string,
                                string
                            >
                        >;
                        password: zod.ZodOptional<
                            zod.ZodEffects<zod.ZodString, string, string>
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        username?: string | undefined;
                        password?: string | undefined;
                    },
                    {
                        username?: string | undefined;
                        password?: string | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/user/token";
        description: "Get new personal token for using DOS Scanner with ORT or through the API";
        response: zod.ZodObject<
            {
                token: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                token: string;
            },
            {
                token: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/license-conclusions";
        alias: "GetLicenseConclusions";
        description: "Get license conclusions";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "contextPurl",
                            "username",
                            "detectedLicenseExpressionSPDX",
                            "concludedLicenseExpressionSPDX",
                            "comment",
                            "local",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "bulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
                description: string;
            },
            {
                name: "hasBulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            local: zod.ZodBoolean;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                            bulkConclusionId: zod.ZodNullable<zod.ZodNumber>;
                            sha256: zod.ZodString;
                            contextPurl: zod.ZodString;
                            affectedPaths: zod.ZodObject<
                                {
                                    inContextPurl: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                path: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                path: string;
                                            },
                                            {
                                                path: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                    additionalMatches: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                path: zod.ZodString;
                                                purl: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                path: string;
                                                purl: string;
                                            },
                                            {
                                                path: string;
                                                purl: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                    inQueryPurl: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                path: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                path: string;
                                            },
                                            {
                                                path: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    inContextPurl: {
                                        path: string;
                                    }[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                    inQueryPurl: {
                                        path: string;
                                    }[];
                                },
                                {
                                    inContextPurl: {
                                        path: string;
                                    }[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                    inQueryPurl: {
                                        path: string;
                                    }[];
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            sha256: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                            affectedPaths: {
                                inContextPurl: {
                                    path: string;
                                }[];
                                additionalMatches: {
                                    path: string;
                                    purl: string;
                                }[];
                                inQueryPurl: {
                                    path: string;
                                }[];
                            };
                        },
                        {
                            id: number;
                            sha256: string;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                            affectedPaths: {
                                inContextPurl: {
                                    path: string;
                                }[];
                                additionalMatches: {
                                    path: string;
                                    purl: string;
                                }[];
                                inQueryPurl: {
                                    path: string;
                                }[];
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    id: number;
                    sha256: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                    affectedPaths: {
                        inContextPurl: {
                            path: string;
                        }[];
                        additionalMatches: {
                            path: string;
                            purl: string;
                        }[];
                        inQueryPurl: {
                            path: string;
                        }[];
                    };
                }[];
            },
            {
                licenseConclusions: {
                    id: number;
                    sha256: string;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                    affectedPaths: {
                        inContextPurl: {
                            path: string;
                        }[];
                        additionalMatches: {
                            path: string;
                            purl: string;
                        }[];
                        inQueryPurl: {
                            path: string;
                        }[];
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/license-conclusions/count";
        alias: "GetLicenseConclusionsCount";
        description: "Get count of license conclusions";
        parameters: [
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "contextPurlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "bulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
                description: string;
            },
            {
                name: "hasBulkConclusionId";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages/:purl/files/:sha256/license-conclusions";
        description: "Get license conclusions for specified file in specified package";
        alias: "GetLicenseConclusionsForFileInPackage";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "sha256";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            local: zod.ZodBoolean;
                            contextPurl: zod.ZodString;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                            bulkConclusionId: zod.ZodNullable<zod.ZodNumber>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                        },
                        {
                            id: number;
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            bulkConclusionId: number | null;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    id: number;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                }[];
            },
            {
                licenseConclusions: {
                    id: number;
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    bulkConclusionId: number | null;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/user/packages/:purl/files/:sha256/license-conclusions";
        description: "Add a new license conclusion";
        alias: "PostLicenseConclusion";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "sha256";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        concludedLicenseExpressionSPDX: zod.ZodUnion<
                            [
                                zod.ZodEffects<zod.ZodString, string, string>,
                                zod.ZodEnum<["NONE", "NOASSERTION"]>,
                            ]
                        >;
                        detectedLicenseExpressionSPDX: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                        comment: zod.ZodOptional<zod.ZodString>;
                        local: zod.ZodOptional<zod.ZodBoolean>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        concludedLicenseExpressionSPDX: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        concludedLicenseExpressionSPDX: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                licenseConclusionId: zod.ZodNumber;
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                licenseConclusionId: number;
            },
            {
                message: string;
                licenseConclusionId: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/user/license-conclusions/:id";
        description: "Edit a license conclusion";
        alias: "PutLicenseConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodEffects<
                    zod.ZodObject<
                        {
                            concludedLicenseExpressionSPDX: zod.ZodOptional<
                                zod.ZodUnion<
                                    [
                                        zod.ZodEffects<
                                            zod.ZodString,
                                            string,
                                            string
                                        >,
                                        zod.ZodEnum<["NONE", "NOASSERTION"]>,
                                    ]
                                >
                            >;
                            detectedLicenseExpressionSPDX: zod.ZodOptional<zod.ZodString>;
                            comment: zod.ZodOptional<
                                zod.ZodNullable<zod.ZodString>
                            >;
                            local: zod.ZodOptional<zod.ZodBoolean>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            concludedLicenseExpressionSPDX?: string | undefined;
                            detectedLicenseExpressionSPDX?: string | undefined;
                            comment?: string | null | undefined;
                            local?: boolean | undefined;
                        },
                        {
                            concludedLicenseExpressionSPDX?: string | undefined;
                            detectedLicenseExpressionSPDX?: string | undefined;
                            comment?: string | null | undefined;
                            local?: boolean | undefined;
                        }
                    >,
                    {
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/user/license-conclusions/:id";
        description: "Delete a license conclusion";
        alias: "DeleteLicenseConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages/:purl/bulk-conclusions";
        description: "Get bulk conclusions for specified purl";
        alias: "GetBulkConclusionsByPurl";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                bulkConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            local: zod.ZodBoolean;
                            licenseConclusions: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        id: zod.ZodNumber;
                                        file: zod.ZodObject<
                                            {
                                                sha256: zod.ZodString;
                                                filetrees: zod.ZodArray<
                                                    zod.ZodObject<
                                                        {
                                                            path: zod.ZodString;
                                                        },
                                                        "strip",
                                                        zod.ZodTypeAny,
                                                        {
                                                            path: string;
                                                        },
                                                        {
                                                            path: string;
                                                        }
                                                    >,
                                                    "many"
                                                >;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                sha256: string;
                                                filetrees: {
                                                    path: string;
                                                }[];
                                            },
                                            {
                                                sha256: string;
                                                filetrees: {
                                                    path: string;
                                                }[];
                                            }
                                        >;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        id: number;
                                        file: {
                                            sha256: string;
                                            filetrees: {
                                                path: string;
                                            }[];
                                        };
                                    },
                                    {
                                        id: number;
                                        file: {
                                            sha256: string;
                                            filetrees: {
                                                path: string;
                                            }[];
                                        };
                                    }
                                >,
                                "many"
                            >;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                file: {
                                    sha256: string;
                                    filetrees: {
                                        path: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        },
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                file: {
                                    sha256: string;
                                    filetrees: {
                                        path: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        file: {
                            sha256: string;
                            filetrees: {
                                path: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            },
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        file: {
                            sha256: string;
                            filetrees: {
                                path: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/user/packages/:purl/bulk-conclusions";
        description: "Add a new bulk conclusion";
        alias: "PostBulkConclusion";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodEffects<zod.ZodString, string, string>;
                        concludedLicenseExpressionSPDX: zod.ZodUnion<
                            [
                                zod.ZodEffects<zod.ZodString, string, string>,
                                zod.ZodEnum<["NONE", "NOASSERTION"]>,
                            ]
                        >;
                        detectedLicenseExpressionSPDX: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                        comment: zod.ZodOptional<zod.ZodString>;
                        local: zod.ZodOptional<zod.ZodBoolean>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        concludedLicenseExpressionSPDX: string;
                        pattern: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        concludedLicenseExpressionSPDX: string;
                        pattern: string;
                        detectedLicenseExpressionSPDX?:
                            | string
                            | null
                            | undefined;
                        comment?: string | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                bulkConclusionId: zod.ZodNumber;
                matchedPathsCount: zod.ZodNumber;
                addedLicenseConclusionsCount: zod.ZodNumber;
                affectedFilesInPackageCount: zod.ZodNumber;
                affectedFilesAcrossAllPackagesCount: zod.ZodNumber;
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                bulkConclusionId: number;
                matchedPathsCount: number;
                addedLicenseConclusionsCount: number;
                affectedFilesInPackageCount: number;
                affectedFilesAcrossAllPackagesCount: number;
            },
            {
                message: string;
                bulkConclusionId: number;
                matchedPathsCount: number;
                addedLicenseConclusionsCount: number;
                affectedFilesInPackageCount: number;
                affectedFilesAcrossAllPackagesCount: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/bulk-conclusions";
        description: "Get bulk conclusions";
        alias: "GetBulkConclusions";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "pkg",
                            "username",
                            "pattern",
                            "detectedLicenseExpressionSPDX",
                            "concludedLicenseExpressionSPDX",
                            "comment",
                            "local",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                bulkConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodNullable<zod.ZodString>;
                            concludedLicenseExpressionSPDX: zod.ZodString;
                            detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                            comment: zod.ZodNullable<zod.ZodString>;
                            contextPurl: zod.ZodString;
                            local: zod.ZodBoolean;
                            licenseConclusions: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        id: zod.ZodNumber;
                                        sha256: zod.ZodString;
                                        affectedPaths: zod.ZodObject<
                                            {
                                                inContextPurl: zod.ZodArray<
                                                    zod.ZodString,
                                                    "many"
                                                >;
                                                additionalMatches: zod.ZodArray<
                                                    zod.ZodObject<
                                                        {
                                                            path: zod.ZodString;
                                                            purl: zod.ZodString;
                                                        },
                                                        "strip",
                                                        zod.ZodTypeAny,
                                                        {
                                                            path: string;
                                                            purl: string;
                                                        },
                                                        {
                                                            path: string;
                                                            purl: string;
                                                        }
                                                    >,
                                                    "many"
                                                >;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                inContextPurl: string[];
                                                additionalMatches: {
                                                    path: string;
                                                    purl: string;
                                                }[];
                                            },
                                            {
                                                inContextPurl: string[];
                                                additionalMatches: {
                                                    path: string;
                                                    purl: string;
                                                }[];
                                            }
                                        >;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        id: number;
                                        sha256: string;
                                        affectedPaths: {
                                            inContextPurl: string[];
                                            additionalMatches: {
                                                path: string;
                                                purl: string;
                                            }[];
                                        };
                                    },
                                    {
                                        id: number;
                                        sha256: string;
                                        affectedPaths: {
                                            inContextPurl: string[];
                                            additionalMatches: {
                                                path: string;
                                                purl: string;
                                            }[];
                                        };
                                    }
                                >,
                                "many"
                            >;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                sha256: string;
                                affectedPaths: {
                                    inContextPurl: string[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        },
                        {
                            id: number;
                            licenseConclusions: {
                                id: number;
                                sha256: string;
                                affectedPaths: {
                                    inContextPurl: string[];
                                    additionalMatches: {
                                        path: string;
                                        purl: string;
                                    }[];
                                };
                            }[];
                            detectedLicenseExpressionSPDX: string | null;
                            concludedLicenseExpressionSPDX: string;
                            comment: string | null;
                            pattern: string | null;
                            contextPurl: string;
                            local: boolean;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        sha256: string;
                        affectedPaths: {
                            inContextPurl: string[];
                            additionalMatches: {
                                path: string;
                                purl: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            },
            {
                bulkConclusions: {
                    id: number;
                    licenseConclusions: {
                        id: number;
                        sha256: string;
                        affectedPaths: {
                            inContextPurl: string[];
                            additionalMatches: {
                                path: string;
                                purl: string;
                            }[];
                        };
                    }[];
                    detectedLicenseExpressionSPDX: string | null;
                    concludedLicenseExpressionSPDX: string;
                    comment: string | null;
                    pattern: string | null;
                    contextPurl: string;
                    local: boolean;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/bulk-conclusions/count";
        description: "Get count of bulk conclusions";
        alias: "GetBulkConclusionsCount";
        parameters: [
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "purlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "detectedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "concludedLicense";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "local";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/bulk-conclusions/:id";
        description: "Get bulk conclusion by id";
        alias: "GetBulkConclusionById";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                pattern: zod.ZodNullable<zod.ZodString>;
                concludedLicenseExpressionSPDX: zod.ZodString;
                detectedLicenseExpressionSPDX: zod.ZodNullable<zod.ZodString>;
                comment: zod.ZodNullable<zod.ZodString>;
                local: zod.ZodBoolean;
                filePaths: zod.ZodArray<zod.ZodString, "many">;
                licenseConclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                        },
                        {
                            id: number;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseConclusions: {
                    id: number;
                }[];
                detectedLicenseExpressionSPDX: string | null;
                concludedLicenseExpressionSPDX: string;
                comment: string | null;
                pattern: string | null;
                local: boolean;
                filePaths: string[];
            },
            {
                licenseConclusions: {
                    id: number;
                }[];
                detectedLicenseExpressionSPDX: string | null;
                concludedLicenseExpressionSPDX: string;
                comment: string | null;
                pattern: string | null;
                local: boolean;
                filePaths: string[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/user/bulk-conclusions/:id";
        description: "Edit bulk conclusion";
        alias: "PutBulkConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodOptional<zod.ZodString>;
                        concludedLicenseExpressionSPDX: zod.ZodOptional<
                            zod.ZodUnion<
                                [
                                    zod.ZodEffects<
                                        zod.ZodString,
                                        string,
                                        string
                                    >,
                                    zod.ZodEnum<["NONE", "NOASSERTION"]>,
                                ]
                            >
                        >;
                        detectedLicenseExpressionSPDX: zod.ZodOptional<zod.ZodString>;
                        comment: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                        local: zod.ZodOptional<zod.ZodBoolean>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        pattern?: string | undefined;
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    },
                    {
                        pattern?: string | undefined;
                        concludedLicenseExpressionSPDX?: string | undefined;
                        detectedLicenseExpressionSPDX?: string | undefined;
                        comment?: string | null | undefined;
                        local?: boolean | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/user/bulk-conclusions/:id";
        description: "Delete a bulk conclusion";
        alias: "DeleteBulkConclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/path-exclusions";
        description: "Get path exclusions";
        alias: "GetPathExclusions";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "pkg",
                            "pattern",
                            "reason",
                            "comment",
                            "username",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "reason";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                pathExclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodString;
                            reason: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                            package: zod.ZodObject<
                                {
                                    purl: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    purl: string;
                                },
                                {
                                    purl: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            package: {
                                purl: string;
                            };
                        },
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                            package: {
                                purl: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    package: {
                        purl: string;
                    };
                }[];
            },
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                    package: {
                        purl: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/path-exclusions/count";
        description: "Get count of path exclusions";
        alias: "GetPathExclusionsCount";
        parameters: [
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "purlStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "username";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "usernameStrict";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodBoolean>;
                description: string;
            },
            {
                name: "pattern";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "reason";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "comment";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
                description: string;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
                description: string;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/path-exclusions/:id/affected-files";
        description: "Get affected files for specified path exclusion";
        alias: "GetAffectedFilesForPathExclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                affectedFiles: zod.ZodArray<zod.ZodString, "many">;
            },
            "strip",
            zod.ZodTypeAny,
            {
                affectedFiles: string[];
            },
            {
                affectedFiles: string[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "put";
        path: "/user/path-exclusions/:id";
        description: "Edit a path exclusion";
        alias: "PutPathExclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodOptional<zod.ZodString>;
                        reason: zod.ZodOptional<
                            zod.ZodEffects<zod.ZodString, string, string>
                        >;
                        comment: zod.ZodOptional<zod.ZodString>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        pattern?: string | undefined;
                        reason?: string | undefined;
                        comment?: string | undefined;
                    },
                    {
                        pattern?: string | undefined;
                        reason?: string | undefined;
                        comment?: string | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/user/packages/:purl/path-exclusions";
        description: "Add a new path exclusion";
        alias: "PostPathExclusion";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        pattern: zod.ZodString;
                        reason: zod.ZodEffects<zod.ZodString, string, string>;
                        comment: zod.ZodOptional<
                            zod.ZodNullable<zod.ZodString>
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        pattern: string;
                        reason: string;
                        comment?: string | null | undefined;
                    },
                    {
                        pattern: string;
                        reason: string;
                        comment?: string | null | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                pathExclusionId: zod.ZodNumber;
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                pathExclusionId: number;
            },
            {
                message: string;
                pathExclusionId: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/user/path-exclusions/:id";
        description: "Delete a path exclusion";
        alias: "DeletePathExclusion";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages/:purl/path-exclusions";
        description: "Get path exclusions for specified purl";
        alias: "GetPathExclusionsByPurl";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                pathExclusions: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            updatedAt: zod.ZodDate;
                            pattern: zod.ZodString;
                            reason: zod.ZodString;
                            comment: zod.ZodNullable<zod.ZodString>;
                            user: zod.ZodObject<
                                {
                                    username: zod.ZodString;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    username: string;
                                },
                                {
                                    username: string;
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        },
                        {
                            id: number;
                            comment: string | null;
                            pattern: string;
                            reason: string;
                            updatedAt: Date;
                            user: {
                                username: string;
                            };
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            },
            {
                pathExclusions: {
                    id: number;
                    comment: string | null;
                    pattern: string;
                    reason: string;
                    updatedAt: Date;
                    user: {
                        username: string;
                    };
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages/:purl/filetrees";
        alias: "GetFileTree";
        description: "Get file tree for specified purl";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                filetrees: zod.ZodArray<
                    zod.ZodObject<
                        {
                            path: zod.ZodString;
                            packageId: zod.ZodNumber;
                            fileSha256: zod.ZodString;
                            file: zod.ZodObject<
                                {
                                    licenseFindings: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                licenseExpressionSPDX: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                licenseExpressionSPDX: string;
                                            },
                                            {
                                                licenseExpressionSPDX: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                    licenseConclusions: zod.ZodArray<
                                        zod.ZodObject<
                                            {
                                                concludedLicenseExpressionSPDX: zod.ZodString;
                                            },
                                            "strip",
                                            zod.ZodTypeAny,
                                            {
                                                concludedLicenseExpressionSPDX: string;
                                            },
                                            {
                                                concludedLicenseExpressionSPDX: string;
                                            }
                                        >,
                                        "many"
                                    >;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    licenseConclusions: {
                                        concludedLicenseExpressionSPDX: string;
                                    }[];
                                    licenseFindings: {
                                        licenseExpressionSPDX: string;
                                    }[];
                                },
                                {
                                    licenseConclusions: {
                                        concludedLicenseExpressionSPDX: string;
                                    }[];
                                    licenseFindings: {
                                        licenseExpressionSPDX: string;
                                    }[];
                                }
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            path: string;
                            file: {
                                licenseConclusions: {
                                    concludedLicenseExpressionSPDX: string;
                                }[];
                                licenseFindings: {
                                    licenseExpressionSPDX: string;
                                }[];
                            };
                            packageId: number;
                            fileSha256: string;
                        },
                        {
                            path: string;
                            file: {
                                licenseConclusions: {
                                    concludedLicenseExpressionSPDX: string;
                                }[];
                                licenseFindings: {
                                    licenseExpressionSPDX: string;
                                }[];
                            };
                            packageId: number;
                            fileSha256: string;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                filetrees: {
                    path: string;
                    file: {
                        licenseConclusions: {
                            concludedLicenseExpressionSPDX: string;
                        }[];
                        licenseFindings: {
                            licenseExpressionSPDX: string;
                        }[];
                    };
                    packageId: number;
                    fileSha256: string;
                }[];
            },
            {
                filetrees: {
                    path: string;
                    file: {
                        licenseConclusions: {
                            concludedLicenseExpressionSPDX: string;
                        }[];
                        licenseFindings: {
                            licenseExpressionSPDX: string;
                        }[];
                    };
                    packageId: number;
                    fileSha256: string;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages";
        description: "Get packages";
        alias: "GetPackages";
        parameters: [
            {
                name: "pageSize";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "pageIndex";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodNumber>;
            },
            {
                name: "sortBy";
                type: "Query";
                schema: zod.ZodOptional<
                    zod.ZodEnum<
                        [
                            "purl",
                            "name",
                            "version",
                            "type",
                            "namespace",
                            "createdAt",
                            "updatedAt",
                        ]
                    >
                >;
            },
            {
                name: "sortOrder";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodEnum<["asc", "desc"]>>;
            },
            {
                name: "name";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "namespace";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "version";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "type";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                packages: zod.ZodArray<
                    zod.ZodObject<
                        {
                            purl: zod.ZodString;
                            updatedAt: zod.ZodDate;
                            name: zod.ZodString;
                            version: zod.ZodNullable<zod.ZodString>;
                            type: zod.ZodString;
                            namespace: zod.ZodNullable<zod.ZodString>;
                            qualifiers: zod.ZodNullable<zod.ZodString>;
                            subpath: zod.ZodNullable<zod.ZodString>;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            type: string;
                            name: string;
                            purl: string;
                            updatedAt: Date;
                            version: string | null;
                            namespace: string | null;
                            qualifiers: string | null;
                            subpath: string | null;
                        },
                        {
                            type: string;
                            name: string;
                            purl: string;
                            updatedAt: Date;
                            version: string | null;
                            namespace: string | null;
                            qualifiers: string | null;
                            subpath: string | null;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                packages: {
                    type: string;
                    name: string;
                    purl: string;
                    updatedAt: Date;
                    version: string | null;
                    namespace: string | null;
                    qualifiers: string | null;
                    subpath: string | null;
                }[];
            },
            {
                packages: {
                    type: string;
                    name: string;
                    purl: string;
                    updatedAt: Date;
                    version: string | null;
                    namespace: string | null;
                    qualifiers: string | null;
                    subpath: string | null;
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages/count";
        description: "Get packages count";
        alias: "GetPackagesCount";
        parameters: [
            {
                name: "name";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "namespace";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "version";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "type";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "purl";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodString>;
            },
            {
                name: "createdAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "createdAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtGte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
            {
                name: "updatedAtLte";
                type: "Query";
                schema: zod.ZodOptional<zod.ZodDate>;
            },
        ];
        response: zod.ZodObject<
            {
                count: zod.ZodNumber;
            },
            "strip",
            zod.ZodTypeAny,
            {
                count: number;
            },
            {
                count: number;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/packages/:purl/filetrees/:path/files";
        alias: "GetFile";
        description: "Get file sha256 and S3 download url for file in path in package";
        parameters: [
            {
                name: "purl";
                type: "Path";
                schema: zod.ZodString;
            },
            {
                name: "path";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                sha256: zod.ZodString;
                downloadUrl: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                sha256: string;
                downloadUrl: string;
            },
            {
                sha256: string;
                downloadUrl: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "get";
        path: "/user/files/:sha256/license-findings";
        alias: "GetLicenseFindingsForFile";
        description: "Get license findings for specified file";
        parameters: [
            {
                name: "sha256";
                type: "Path";
                schema: zod.ZodString;
            },
        ];
        response: zod.ZodObject<
            {
                licenseFindings: zod.ZodArray<
                    zod.ZodObject<
                        {
                            id: zod.ZodNumber;
                            createdAt: zod.ZodDate;
                            updatedAt: zod.ZodDate;
                            licenseExpressionSPDX: zod.ZodString;
                            scanner: zod.ZodString;
                            scannerConfig: zod.ZodString;
                            licenseFindingMatches: zod.ZodArray<
                                zod.ZodObject<
                                    {
                                        id: zod.ZodNumber;
                                        createdAt: zod.ZodDate;
                                        updatedAt: zod.ZodDate;
                                        licenseExpression: zod.ZodNullable<zod.ZodString>;
                                        startLine: zod.ZodNumber;
                                        endLine: zod.ZodNumber;
                                        score: zod.ZodNumber;
                                    },
                                    "strip",
                                    zod.ZodTypeAny,
                                    {
                                        id: number;
                                        score: number;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        licenseExpression: string | null;
                                        startLine: number;
                                        endLine: number;
                                    },
                                    {
                                        id: number;
                                        score: number;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        licenseExpression: string | null;
                                        startLine: number;
                                        endLine: number;
                                    }
                                >,
                                "many"
                            >;
                        },
                        "strip",
                        zod.ZodTypeAny,
                        {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            licenseExpressionSPDX: string;
                            scanner: string;
                            scannerConfig: string;
                            licenseFindingMatches: {
                                id: number;
                                score: number;
                                createdAt: Date;
                                updatedAt: Date;
                                licenseExpression: string | null;
                                startLine: number;
                                endLine: number;
                            }[];
                        },
                        {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            licenseExpressionSPDX: string;
                            scanner: string;
                            scannerConfig: string;
                            licenseFindingMatches: {
                                id: number;
                                score: number;
                                createdAt: Date;
                                updatedAt: Date;
                                licenseExpression: string | null;
                                startLine: number;
                                endLine: number;
                            }[];
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                licenseFindings: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    licenseExpressionSPDX: string;
                    scanner: string;
                    scannerConfig: string;
                    licenseFindingMatches: {
                        id: number;
                        score: number;
                        createdAt: Date;
                        updatedAt: Date;
                        licenseExpression: string | null;
                        startLine: number;
                        endLine: number;
                    }[];
                }[];
            },
            {
                licenseFindings: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    licenseExpressionSPDX: string;
                    scanner: string;
                    scannerConfig: string;
                    licenseFindingMatches: {
                        id: number;
                        score: number;
                        createdAt: Date;
                        updatedAt: Date;
                        licenseExpression: string | null;
                        startLine: number;
                        endLine: number;
                    }[];
                }[];
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/admin/scan-results";
        description: "Delete scan results and other data for specified purl. Doesn't delete files and related data if files are in other packages";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        purl: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        purl: string;
                    },
                    {
                        purl: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/admin/user";
        description: "Add user";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        username: zod.ZodEffects<
                            zod.ZodEffects<
                                zod.ZodEffects<zod.ZodString, string, string>,
                                string,
                                string
                            >,
                            string,
                            string
                        >;
                        password: zod.ZodEffects<zod.ZodString, string, string>;
                        role: zod.ZodOptional<zod.ZodEnum<["ADMIN", "USER"]>>;
                        subscription: zod.ZodOptional<
                            zod.ZodEnum<["SILVER", "GOLD"]>
                        >;
                        token: zod.ZodOptional<zod.ZodString>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        username: string;
                        password: string;
                        role?: "ADMIN" | "USER" | undefined;
                        subscription?: "SILVER" | "GOLD" | undefined;
                        token?: string | undefined;
                    },
                    {
                        username: string;
                        password: string;
                        role?: "ADMIN" | "USER" | undefined;
                        subscription?: "SILVER" | "GOLD" | undefined;
                        token?: string | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                username: zod.ZodString;
                password: zod.ZodString;
                role: zod.ZodEnum<["ADMIN", "USER"]>;
                subscription: zod.ZodEnum<["SILVER", "GOLD"]>;
                token: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                username: string;
                password: string;
                role: "ADMIN" | "USER";
                subscription: "SILVER" | "GOLD";
                token: string;
            },
            {
                username: string;
                password: string;
                role: "ADMIN" | "USER";
                subscription: "SILVER" | "GOLD";
                token: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "delete";
        path: "/admin/user/:id";
        description: "Delete user";
        parameters: [
            {
                name: "id";
                type: "Path";
                schema: zod.ZodNumber;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/admin/purl-cleanup";
        description: "Remove old purl bookmarks. Get detailed descriptions of options by making this query with an empty body.";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        options: zod.ZodOptional<
                            zod.ZodObject<
                                {
                                    dryRun: zod.ZodOptional<zod.ZodBoolean>;
                                    pkgNameStartsWith: zod.ZodOptional<zod.ZodString>;
                                    allPhases: zod.ZodOptional<zod.ZodBoolean>;
                                    transferPathExclusions: zod.ZodOptional<zod.ZodBoolean>;
                                    transferBulkConclusions: zod.ZodOptional<zod.ZodBoolean>;
                                    changeContextPurls: zod.ZodOptional<zod.ZodBoolean>;
                                    deleteOldPurlBookmarks: zod.ZodOptional<zod.ZodBoolean>;
                                },
                                "strip",
                                zod.ZodTypeAny,
                                {
                                    dryRun?: boolean | undefined;
                                    pkgNameStartsWith?: string | undefined;
                                    allPhases?: boolean | undefined;
                                    transferPathExclusions?:
                                        | boolean
                                        | undefined;
                                    transferBulkConclusions?:
                                        | boolean
                                        | undefined;
                                    changeContextPurls?: boolean | undefined;
                                    deleteOldPurlBookmarks?:
                                        | boolean
                                        | undefined;
                                },
                                {
                                    dryRun?: boolean | undefined;
                                    pkgNameStartsWith?: string | undefined;
                                    allPhases?: boolean | undefined;
                                    transferPathExclusions?:
                                        | boolean
                                        | undefined;
                                    transferBulkConclusions?:
                                        | boolean
                                        | undefined;
                                    changeContextPurls?: boolean | undefined;
                                    deleteOldPurlBookmarks?:
                                        | boolean
                                        | undefined;
                                }
                            >
                        >;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        options?:
                            | {
                                  dryRun?: boolean | undefined;
                                  pkgNameStartsWith?: string | undefined;
                                  allPhases?: boolean | undefined;
                                  transferPathExclusions?: boolean | undefined;
                                  transferBulkConclusions?: boolean | undefined;
                                  changeContextPurls?: boolean | undefined;
                                  deleteOldPurlBookmarks?: boolean | undefined;
                              }
                            | undefined;
                    },
                    {
                        options?:
                            | {
                                  dryRun?: boolean | undefined;
                                  pkgNameStartsWith?: string | undefined;
                                  allPhases?: boolean | undefined;
                                  transferPathExclusions?: boolean | undefined;
                                  transferBulkConclusions?: boolean | undefined;
                                  changeContextPurls?: boolean | undefined;
                                  deleteOldPurlBookmarks?: boolean | undefined;
                              }
                            | undefined;
                    }
                >;
            },
        ];
        response: zod.ZodObject<
            {
                message: zod.ZodString;
                optionDescriptions: zod.ZodObject<
                    {
                        dryRun: zod.ZodString;
                        pkgNameStartsWith: zod.ZodString;
                        allPhases: zod.ZodString;
                        transferPathExclusions: zod.ZodString;
                        transferBulkConclusions: zod.ZodString;
                        changeContextPurls: zod.ZodString;
                        deleteOldPurlBookmarks: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        dryRun: string;
                        pkgNameStartsWith: string;
                        allPhases: string;
                        transferPathExclusions: string;
                        transferBulkConclusions: string;
                        changeContextPurls: string;
                        deleteOldPurlBookmarks: string;
                    },
                    {
                        dryRun: string;
                        pkgNameStartsWith: string;
                        allPhases: string;
                        transferPathExclusions: string;
                        transferBulkConclusions: string;
                        changeContextPurls: string;
                        deleteOldPurlBookmarks: string;
                    }
                >;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
                optionDescriptions: {
                    dryRun: string;
                    pkgNameStartsWith: string;
                    allPhases: string;
                    transferPathExclusions: string;
                    transferBulkConclusions: string;
                    changeContextPurls: string;
                    deleteOldPurlBookmarks: string;
                };
            },
            {
                message: string;
                optionDescriptions: {
                    dryRun: string;
                    pkgNameStartsWith: string;
                    allPhases: string;
                    transferPathExclusions: string;
                    transferBulkConclusions: string;
                    changeContextPurls: string;
                    deleteOldPurlBookmarks: string;
                };
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/auth/login/password";
        description: "Login with password";
        alias: "PostLoginPassword";
        parameters: [
            {
                name: "body";
                type: "Body";
                schema: zod.ZodObject<
                    {
                        username: zod.ZodString;
                        password: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        username: string;
                        password: string;
                    },
                    {
                        username: string;
                        password: string;
                    }
                >;
            },
        ];
        response: zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
    {
        method: "post";
        path: "/auth/logout";
        description: "Logout";
        response: zod.ZodObject<
            {
                message: zod.ZodString;
            },
            "strip",
            zod.ZodTypeAny,
            {
                message: string;
            },
            {
                message: string;
            }
        >;
        errors: [
            {
                status: 500;
                description: "Internal server error";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 400;
                description: "Bad request";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                        path: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                        path?: string | null | undefined;
                    },
                    {
                        message: string;
                        path?: string | null | undefined;
                    }
                >;
            },
            {
                status: 403;
                description: "Forbidden";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 401;
                description: "Unauthorized";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
            {
                status: 404;
                description: "Not found";
                schema: zod.ZodObject<
                    {
                        message: zod.ZodString;
                    },
                    "strip",
                    zod.ZodTypeAny,
                    {
                        message: string;
                    },
                    {
                        message: string;
                    }
                >;
            },
        ];
    },
];

declare const PutUserReq: z.ZodObject<
    {
        username: z.ZodOptional<
            z.ZodEffects<
                z.ZodEffects<
                    z.ZodEffects<z.ZodString, string, string>,
                    string,
                    string
                >,
                string,
                string
            >
        >;
        password: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    },
    "strip",
    z.ZodTypeAny,
    {
        username?: string | undefined;
        password?: string | undefined;
    },
    {
        username?: string | undefined;
        password?: string | undefined;
    }
>;
declare const validReasons: {
    name: string;
    description: string;
}[];
declare const FileTree: z.ZodObject<
    {
        path: z.ZodString;
        packageId: z.ZodNumber;
        fileSha256: z.ZodString;
        file: z.ZodObject<
            {
                licenseFindings: z.ZodArray<
                    z.ZodObject<
                        {
                            licenseExpressionSPDX: z.ZodString;
                        },
                        "strip",
                        z.ZodTypeAny,
                        {
                            licenseExpressionSPDX: string;
                        },
                        {
                            licenseExpressionSPDX: string;
                        }
                    >,
                    "many"
                >;
                licenseConclusions: z.ZodArray<
                    z.ZodObject<
                        {
                            concludedLicenseExpressionSPDX: z.ZodString;
                        },
                        "strip",
                        z.ZodTypeAny,
                        {
                            concludedLicenseExpressionSPDX: string;
                        },
                        {
                            concludedLicenseExpressionSPDX: string;
                        }
                    >,
                    "many"
                >;
            },
            "strip",
            z.ZodTypeAny,
            {
                licenseConclusions: {
                    concludedLicenseExpressionSPDX: string;
                }[];
                licenseFindings: {
                    licenseExpressionSPDX: string;
                }[];
            },
            {
                licenseConclusions: {
                    concludedLicenseExpressionSPDX: string;
                }[];
                licenseFindings: {
                    licenseExpressionSPDX: string;
                }[];
            }
        >;
    },
    "strip",
    z.ZodTypeAny,
    {
        path: string;
        file: {
            licenseConclusions: {
                concludedLicenseExpressionSPDX: string;
            }[];
            licenseFindings: {
                licenseExpressionSPDX: string;
            }[];
        };
        packageId: number;
        fileSha256: string;
    },
    {
        path: string;
        file: {
            licenseConclusions: {
                concludedLicenseExpressionSPDX: string;
            }[];
            licenseFindings: {
                licenseExpressionSPDX: string;
            }[];
        };
        packageId: number;
        fileSha256: string;
    }
>;
type FileTreeType = z.infer<typeof FileTree>;
declare const PostFileTreeRes: z.ZodObject<
    {
        filetrees: z.ZodArray<
            z.ZodObject<
                {
                    path: z.ZodString;
                    packageId: z.ZodNumber;
                    fileSha256: z.ZodString;
                    file: z.ZodObject<
                        {
                            licenseFindings: z.ZodArray<
                                z.ZodObject<
                                    {
                                        licenseExpressionSPDX: z.ZodString;
                                    },
                                    "strip",
                                    z.ZodTypeAny,
                                    {
                                        licenseExpressionSPDX: string;
                                    },
                                    {
                                        licenseExpressionSPDX: string;
                                    }
                                >,
                                "many"
                            >;
                            licenseConclusions: z.ZodArray<
                                z.ZodObject<
                                    {
                                        concludedLicenseExpressionSPDX: z.ZodString;
                                    },
                                    "strip",
                                    z.ZodTypeAny,
                                    {
                                        concludedLicenseExpressionSPDX: string;
                                    },
                                    {
                                        concludedLicenseExpressionSPDX: string;
                                    }
                                >,
                                "many"
                            >;
                        },
                        "strip",
                        z.ZodTypeAny,
                        {
                            licenseConclusions: {
                                concludedLicenseExpressionSPDX: string;
                            }[];
                            licenseFindings: {
                                licenseExpressionSPDX: string;
                            }[];
                        },
                        {
                            licenseConclusions: {
                                concludedLicenseExpressionSPDX: string;
                            }[];
                            licenseFindings: {
                                licenseExpressionSPDX: string;
                            }[];
                        }
                    >;
                },
                "strip",
                z.ZodTypeAny,
                {
                    path: string;
                    file: {
                        licenseConclusions: {
                            concludedLicenseExpressionSPDX: string;
                        }[];
                        licenseFindings: {
                            licenseExpressionSPDX: string;
                        }[];
                    };
                    packageId: number;
                    fileSha256: string;
                },
                {
                    path: string;
                    file: {
                        licenseConclusions: {
                            concludedLicenseExpressionSPDX: string;
                        }[];
                        licenseFindings: {
                            licenseExpressionSPDX: string;
                        }[];
                    };
                    packageId: number;
                    fileSha256: string;
                }
            >,
            "many"
        >;
    },
    "strip",
    z.ZodTypeAny,
    {
        filetrees: {
            path: string;
            file: {
                licenseConclusions: {
                    concludedLicenseExpressionSPDX: string;
                }[];
                licenseFindings: {
                    licenseExpressionSPDX: string;
                }[];
            };
            packageId: number;
            fileSha256: string;
        }[];
    },
    {
        filetrees: {
            path: string;
            file: {
                licenseConclusions: {
                    concludedLicenseExpressionSPDX: string;
                }[];
                licenseFindings: {
                    licenseExpressionSPDX: string;
                }[];
            };
            packageId: number;
            fileSha256: string;
        }[];
    }
>;
type PostFileTreeResType = z.infer<typeof PostFileTreeRes>;

declare const getUsernameSchema: (
    required: boolean,
) => z.ZodEffects<
    z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>,
    string,
    string
>;
declare const getPasswordSchema: (
    required: boolean,
) => z.ZodEffects<z.ZodString, string, string>;

export {
    type FileTreeType,
    type PostFileTreeResType,
    PutUserReq,
    ScannerJobResultSchema,
    type ScannerJobResultType,
    adminAPI,
    authAPI,
    dosAPI,
    getPasswordSchema,
    getUsernameSchema,
    scannerAPI,
    scannerAgentApi,
    userAPI,
    validReasons,
};
