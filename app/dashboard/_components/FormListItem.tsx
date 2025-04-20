// "use client";

// import { Button } from '@/components/ui/button';
// import { Edit, Share, Trash } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react';
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { useUser } from '@clerk/nextjs';
// import { db } from '@/configs';
// import { JsonForms, userResponses } from '@/configs/schema';
// import { and, eq } from 'drizzle-orm';
// import { toast } from 'sonner';
// import { RWebShare } from 'react-web-share';

// // Define types for props
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

// interface JsonForm {
//     formTitle: string;
//     formHeading: string;
//     // Add other properties from jsonform as needed
// }

// interface FormListItemProps {
//     formRecord: Form;
//     jsonForm: JsonForm;
//     refreshData: () => void;
// }

// function FormListItem({ formRecord, jsonForm, refreshData }: FormListItemProps) {
//     const { user } = useUser();

//     const onDeleteForm = async () => {
//         try {
//             // Delete related records in the userResponses table
//             await db.delete(userResponses)
//                 .where(eq(userResponses.formRef, formRecord.id));

//             // Delete the form record in the jsonForms table
//             const result = await db.delete(JsonForms)
//                 .where(and(
//                     eq(JsonForms.id, formRecord.id),
//                     eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
//                 ));

//             if (result) {
//                 toast('Form Deleted!!!');
//                 refreshData();
//                 window.location.reload();
//             }
//         } catch (error) {
//             console.error('Error deleting form:', error);
//             toast('Error deleting form!');
//         }
//     };

//     return (
//         <div className='border shadow-sm rounded-lg p-4'>
//             <div className='flex justify-between'>
//                 <h2></h2>
//                 <AlertDialog>
//                     <AlertDialogTrigger asChild>
//                         <Trash className='h-5 w-5 text-red-600 cursor-pointer hover:scale-105 transition-all' />
//                     </AlertDialogTrigger>
//                     <AlertDialogContent>
//                         <AlertDialogHeader>
//                             <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                             <AlertDialogDescription>
//                                 This action cannot be undone. This will permanently delete your account
//                                 and remove your data from our servers.
//                             </AlertDialogDescription>
//                         </AlertDialogHeader>
//                         <AlertDialogFooter>
//                             <AlertDialogCancel>Cancel</AlertDialogCancel>
//                             <AlertDialogAction onClick={() => onDeleteForm()}>
//                                 Continue
//                             </AlertDialogAction>
//                         </AlertDialogFooter>
//                     </AlertDialogContent>
//                 </AlertDialog>
//             </div>
//             <h2 className='text-lg text-black'>{jsonForm?.formTitle}</h2>
//             <h2 className='text-sm text-gray-500'>{jsonForm?.formHeading}</h2>
//             <hr className='my-4' />
//             <div className='flex justify-between'>
//                 <RWebShare
//                     data={{
//                         text: `${jsonForm?.formHeading}, Build your form in seconds with AI form Builder`,
//                         url: `${process.env.NEXT_PUBLIC_BASE_URL}/aiform/${formRecord?.id}`,
//                         title: jsonForm?.formTitle,
//                     }}
//                     onClick={() => console.log("shared successfully!")}
//                 >
//                     <Button variant="outline" size="sm" className="flex gap-2">
//                         <Share className='h-5 w-5' /> Share
//                     </Button>
//                 </RWebShare>
//                 <Link href={`/edit-form/${formRecord?.id}`}>
//                     <Button className="flex gap-2" size="sm">
//                         <Edit className='h-5 w-5' /> Edit
//                     </Button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default FormListItem;
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Share, Trash } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs';
import { JsonForms, userResponses } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import { toast } from 'sonner';
import { RWebShare } from 'react-web-share';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface Form {
  id: number;
  jsonform: string;
  createdBy: string;
  createdAt: string;
}

interface JsonForm {
  formTitle: string;
  formHeading: string;
}

interface FormListItemProps {
  formRecord: Form;
  jsonForm: JsonForm;
  refreshData: () => void;
}

function FormListItem({ formRecord, jsonForm, refreshData }: FormListItemProps) {
  const { user } = useUser();

  const onDeleteForm = async () => {
    try {
      // Delete related responses
      await db.delete(userResponses).where(eq(userResponses.formRef, formRecord.id));

      // Delete the form
      const result = await db.delete(JsonForms).where(
        and(
          eq(JsonForms.id, formRecord.id),
          eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

      if (result) {
        toast.success('Form deleted successfully!');
        refreshData();
        window.location.reload(); // Reload the page to reflect changes
      }
    } catch (error) {
      console.error('Error deleting form:', error);
      toast.error('Failed to delete form. Please try again.');
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{jsonForm?.formTitle}</h2>
          <p className="text-sm text-gray-500">{jsonForm?.formHeading}</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash className="text-red-600 cursor-pointer hover:scale-110 transition" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Form</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this form? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDeleteForm}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="flex justify-between mt-6">
        <RWebShare
          data={{
            text: `${jsonForm?.formHeading} - Build forms fast with AI Form Builder.`,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/aiform/${formRecord?.id}`,
            title: jsonForm?.formTitle,
          }}
        >
          <Button variant="outline" size="sm" className="flex gap-2">
            <Share className="h-4 w-4" /> Share
          </Button>
        </RWebShare>
        <Link href={`/edit-form/${formRecord?.id}`}>
          <Button size="sm" className="flex gap-2">
            <Edit className="h-4 w-4" /> Edit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FormListItem;
