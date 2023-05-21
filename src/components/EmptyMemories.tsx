export default function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-center leading-relaxed w-[360px]">
        Você ainda não registrou nenhuma lembrança, comece a
        {' '}
        <a href="#a" className="underline hover:text-gray-50">criar agora!</a>
      </p>
    </div>
  );
}