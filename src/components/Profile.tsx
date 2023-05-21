import { getUser } from "@/lib/auth";
import { User } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  const {name, avatarUrl} = getUser();
  return (
    <div className="flex items-center gap-3 text-left">
      <Image src={avatarUrl} width={40} height={40} alt={name} className="h-10 w-10 rounded-full"></Image>
      <p className="text-sm leading-snug max-w-[140px]">
        {name}
        <a href="#" className="block text-red-400 hover:text-red-300">Quero sair</a>
      </p>
    </div>
  )
}