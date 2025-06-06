import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function ConfirmationAlert({children,OnDelete}:any) {
  return (
    <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Kamu Yakin untuk Menghapus assistant ini?</AlertDialogTitle>
                <AlertDialogDescription>
                    Dengan menghapus assistant ini, semua data yang terkait dengan assistant ini akan dihapus secara permanen. 
                    Tindakan ini tidak dapat dibatalkan. Pastikan Anda telah mencadangkan data penting sebelum melanjutkan.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={OnDelete}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmationAlert