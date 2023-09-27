// SPDX-FileCopyrightText: 2023 HH Partners
//
// SPDX-License-Identifier: MIT

import { useRouter } from "next/router";
import PackageTree from '@/components/PackageTree';
import CodeInspector from '@/components/CodeInspector';
import { zodiosHooks } from '../../hooks/zodiosHooks';
import { convertJsonToTree } from '@/helpers/convertJsonToTree';

export default function Package() {
    const router = useRouter();
    let { purl } = router.query;

    // If purl has /@ in a row, the characters should be changed to /%40
    // This is because in the purl spec, @ is used to separate the package name and the version

    purl = purl?.toString().replace(/\/@/g, '/%40');

    const { data, isLoading, error } = zodiosHooks.useImmutableQuery('/filetree', { purl: purl as string });
    if (isLoading) {
        return (
        <div>
            Loading...{purl}
        </div>)
    }
    if (error) return <div>{error.message}</div>;
    if (!data) return <div>No data</div>;

    // Convert the JSON
    const convertedData = convertJsonToTree(data.filetrees);

    return (
        <body className='bg-gray-200 h-screen'>
            <div className='flex flex-col md:flex-row h-screen'>

                {/* 1st column (4/12): Show and filter package */}
                <div className="w-full md:w-4/12 flex flex-col m-4 mr-2 p-2 rounded-md bg-white shadow">
                    <PackageTree data={convertedData} />
                </div>

                {/* 2nd column (8/12): Show file, do curation */}
                <div className="w-full md:w-8/12 flex flex-col m-4 ml-2 p-2 rounded-md bg-white shadow">
                    <CodeInspector />
                </div>
            </div>
        </body>
    )
}