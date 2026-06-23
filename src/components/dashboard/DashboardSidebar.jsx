import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person, Briefcase } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Building } from "lucide-react";
import Link from "next/link";

const DashboardSidebar = () => {
    const navItems = [
        { icon: House, label: "Dashboard", href: "/dashboard/recruiter" },
        { icon: Building, label: "My Company", href: "/dashboard/recruiter/companies" },
        { icon: Briefcase, label: "Add Jobs", href: "/dashboard/recruiter/jobs/new" },
        { icon: Envelope, label: "Messages", href: "#" },
        { icon: Person, label: "Profile", href: "#" },
        { icon: Gear, label: "Settings", href: "#" },
    ];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>
    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button variant="secondary" className="block md:hidden">
                    <LayoutSideContentLeft />

                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
};

export default DashboardSidebar;