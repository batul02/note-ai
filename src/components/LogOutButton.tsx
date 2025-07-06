"use client";

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation' 
import { toast } from "sonner";

function LogOutButton() {

  // const {toast} = useToast();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errorMessage = null;

    if (!errorMessage) {
      toast.success("You have been successfully logged out", {
        description: "Logged out"
      })
      router.push("/")
    } else {
      toast.error(errorMessage || "Something went wrong", {
        description: "Error"
      })
    }

    setLoading(false);
    console.log("Logging out...");
  }
  return (
    <Button variant="outline" onClick={handleLogOut} disabled={loading} className='w-24'>{loading? <Loader2 className='animate-spin'/>: "Log Out"}</Button>
  )
}

export default LogOutButton

function useToast(): { toast: any; } {
    throw new Error('Function not implemented.');
}
