// "use client";

// import { db } from '@/configs';
// import { JsonForms } from '@/configs/schema';
// import { useUser } from '@clerk/nextjs';
// import { eq } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react';
// import FormListItemResp from './_components/FormListItemForResponse';

// // Define the interface for JsonForm
// interface JsonForm {
//     id: number;
//     jsonform: string; // JSON string
//     formTitle: string;
//     formHeading: string;
// }

// function Responses() {
//     const { user } = useUser();
//     const [formList, setFormList] = useState<JsonForm[] | undefined>(undefined); // Use the JsonForm type

//     useEffect(() => {
//         if (user) {
//             getFormList();
//         }
//     }, [user]);

//     const getFormList = async () => {
//         try {
//             const rawResult = await db.select().from(JsonForms)
//                 .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress));

//             console.log(rawResult); // Log to verify the structure

//             // Transform the raw result to match the JsonForm interface
//             const transformedResult: JsonForm[] = rawResult.map((item: any) => ({
//                 id: item.id,
//                 jsonform: item.jsonform,
//                 formTitle: item.formTitle || '', // Provide defaults if necessary
//                 formHeading: item.formHeading || '', // Provide defaults if necessary
//             }));

//             setFormList(transformedResult);
//         } catch (error) {
//             console.error('Error fetching forms:', error);
//         }
//     };

//     return (
//         <div className='p-10'>
//             <h2 className='font-bold text-3xl flex items-center justify-between'>Responses</h2>

//             <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
//                 {formList && formList.map((form, index) => (
//                     <FormListItemResp
//                         key={form.id || index}  // Added key prop here
//                         formRecord={form}
//                         jsonForm={JSON.parse(form.jsonform)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Responses;

"use client";

import { db } from '@/configs';
import { JsonForms } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import FormListItemResp from './_components/FormListItemForResponse';

// Define the interface for JsonForm
interface JsonForm {
    id: number;
    jsonform: string; // JSON string
    formTitle: string;
    formHeading: string;
}

function Responses() {
    const { user } = useUser();
    const [formList, setFormList] = useState<JsonForm[] | undefined>(undefined); // Use the JsonForm type

    useEffect(() => {
        if (user) {
            getFormList();
        }
    }, [user]);

    const getFormList = async () => {
        try {
            const rawResult = await db.select().from(JsonForms)
                .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress));

            console.log(rawResult); // Log to verify the structure

            // Transform the raw result to match the JsonForm interface
            const transformedResult: JsonForm[] = rawResult.map((item: any) => ({
                id: item.id,
                jsonform: item.jsonform,
                formTitle: item.formTitle || 'Untitled Form', // Provide defaults if necessary
                formHeading: item.formHeading || 'No description available', // Provide defaults if necessary
            }));

            setFormList(transformedResult);
        } catch (error) {
            console.error('Error fetching forms:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6 sm:p-8 md:p-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8">Responses</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formList && formList.map((form, index) => (
                        <FormListItemResp
                            key={form.id || index} // Added key prop here
                            formRecord={form}
                            jsonForm={JSON.parse(form.jsonform)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Responses;
