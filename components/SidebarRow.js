import Image from 'next/image'

function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex items-center">
            {src && (
                <Image 
                src={src}
                alt="me"
                width={30}
                height={30}
                layout="fixed"
            />
            )}
            {Icon && (
                <Icon className="h-8 w-8 p-1 text-blue-500"/>
            )}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow
