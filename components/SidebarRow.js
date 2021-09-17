import Image from 'next/image'

function SidebarRow({src, Icon, title}) {
    return (
      <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl active:border-r-2 active:border-blue-500">
        {src && (
          <Image src={src} alt="me" width={30} height={30} layout="fixed" />
        )}
        {Icon && (
          <Icon className="h-8 w-8 p-1 cursor-pointer group text-blue-500" />
        )}
        <p className="hidden sm:inline-flex font-medium">{title}</p>
      </div>
    );
}

export default SidebarRow
