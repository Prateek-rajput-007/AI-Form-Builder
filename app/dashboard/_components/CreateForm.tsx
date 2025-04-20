// "use client";

// import React, { useEffect, useState } from 'react';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/dialog";
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { AiChatSession } from '@/configs/AiModal';
// import { useUser } from '@clerk/nextjs';
// import { db } from '@/configs';
// import { JsonForms } from '@/configs/schema';
// import moment from 'moment/moment';
// import { useRouter } from 'next/navigation';
// import { Loader2 } from 'lucide-react';
// import { toast } from 'sonner';
// import { desc, eq } from 'drizzle-orm';

// // Adjusted Form interface based on schema
// interface Form {
//     id: number;
//     jsonform: string;
//     theme?: string;
//     background?: string;
//     style?: string;
//     createdBy: string;
//     createdAt: string;
//     enabledSignIn?: boolean;
// }

// const PROMPT = ",On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle,FieldType, Placeholder, label , required fields, and checkbox and select field type options will be in array only and in JSON format";

// function CreateForm() {
//     const [openDialog, setOpenDialog] = useState(false);
//     const [userInput, setUserInput] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     const { user } = useUser();
//     const route = useRouter();
//     const [formList, setFormList] = useState<Form[]>([]); // Initialize with an empty array of Form type

//     useEffect(() => {
//         if (user) GetFormList();
//     }, [user]);

//     const GetFormList = async () => {
//         const result = await db.select().from(JsonForms)
//             .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
//             .orderBy(desc(JsonForms.id));

//         setFormList(result as Form[]); // Use type assertion if confident
//     }

//     const onCreateForm = async () => {
//         if (formList.length >= 3) {
//             toast('Upgrade to create unlimited forms');
//             return;
//         }
//         setLoading(true);
//         const result = await AiChatSession.sendMessage("Description:" + userInput + PROMPT);
//         console.log(result.response.text());
//         if (result.response.text()) {
//             const resp = await db.insert(JsonForms)
//                 .values({
//                     jsonform: result.response.text(),
//                     createdBy: user?.primaryEmailAddress?.emailAddress,
//                     createdAt: moment().format('DD/MM/yyyy')
//                 }).returning({ id: JsonForms.id });

//             console.log("New Form ID", resp[0].id);
//             if (resp[0].id) {
//                 route.push('/edit-form/' + resp[0].id);
//             }
//             setLoading(false);
//         }
//         setLoading(false);
//     }

//     return (
//         <div>
//             <Button onClick={() => setOpenDialog(true)}>+ Create Form</Button>
//             <Dialog open={openDialog}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Create new form</DialogTitle>
//                         <DialogDescription>
//                             <Textarea className="my-2"
//                                 onChange={(event) => setUserInput(event.target.value)}
//                                 placeholder="Write description of your form"
//                             />
//                             <div className='flex gap-2 my-3 justify-end'>
//                                 <Button
//                                     onClick={() => setOpenDialog(false)}
//                                     variant="destructive"
//                                 >
//                                     Cancel
//                                 </Button>
//                                 <Button
//                                     disabled={loading}
//                                     onClick={() => onCreateForm()}
//                                 >
//                                     {loading ? <Loader2 className='animate-spin' /> : 'Create'}
//                                 </Button>
//                             </div>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     )
// }

// export default CreateForm;



"use client";

import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/dialog";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AiChatSession } from '@/configs/AiModal';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs';
import { JsonForms } from '@/configs/schema';
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
import { Loader2, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { desc, eq } from 'drizzle-orm';

interface Form {
    id: number;
    jsonform: string;
    theme?: string;
    background?: string;
    style?: string;
    createdBy: string;
    createdAt: string;
    enabledSignIn?: boolean;
}

const PROMPT = ",On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle, FieldType, Placeholder, label, required fields, and checkbox and select field type options will be in array only and in JSON format.";

function CreateForm() {
    const [openDialog, setOpenDialog] = useState(false);
    const [userInput, setUserInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useUser();
    const route = useRouter();
    const [formList, setFormList] = useState<Form[]>([]);

    useEffect(() => {
        if (user) GetFormList();
    }, [user]);

    const GetFormList = async () => {
        const result = await db.select().from(JsonForms)
            .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(JsonForms.id));

        setFormList(result as Form[]);
    }

    const onCreateForm = async () => {
        if (formList.length >= 3) {
            toast('Upgrade to create unlimited forms');
            return;
        }
        setLoading(true);
        const result = await AiChatSession.sendMessage("Description:" + userInput + PROMPT);
        const responseText = await result.response.text();
        console.log(responseText);

        if (responseText) {
            const resp = await db.insert(JsonForms)
                .values({
                    jsonform: responseText,
                    createdBy: user?.primaryEmailAddress?.emailAddress,
                    createdAt: moment().format('DD/MM/yyyy')
                })
                .returning({ id: JsonForms.id });

            console.log("New Form ID", resp[0]?.id);

            if (resp[0]?.id) {
                setOpenDialog(false);  // Close dialog after successful form creation
                route.push('/edit-form/' + resp[0].id);
            }
        }
        setLoading(false);
    }

    return (
        <div className="bg-gray-950 text-gray-100 p-4 rounded-md">
            <Button
                onClick={() => setOpenDialog(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300"
            >
                <Plus className="h-5 w-5" />
                Create Form
            </Button>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="bg-gray-900 text-gray-100">
                    <DialogHeader>
                        <DialogTitle>Create new form</DialogTitle>
                        <DialogDescription>
                            <Textarea 
                                className="my-2 bg-gray-800 text-gray-100"
                                onChange={(event) => setUserInput(event.target.value)}
                                placeholder="Write description of your form"
                            />
                            <div className='flex gap-2 my-3 justify-end'>
                                <Button
                                    onClick={() => setOpenDialog(false)}
                                    variant="destructive"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    disabled={loading}
                                    onClick={() => onCreateForm()}
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : 'Create'}
                                </Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateForm;
