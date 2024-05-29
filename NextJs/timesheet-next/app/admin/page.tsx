import { user, project } from "../utils/types";
import TSUserTable from "../ui/TSUserTable";
import TSProjectTable from "../ui/TSProjectTable";
export default function admin() {
    const users: Array<user> = [
        {
            id: 1,
            username: "John Doe",
            email: "test@jd.com",
            role: "Admin",
        },
        {
            id: 2,
            username: "Jan Doe",
            email: "test2@jd.com",
            role: "Supervisor",
        },
    ];

    const projects: Array<project> = [
        {
            id: 1,
            name: "Project 1",
            description: "Description of project 1",
            users: [users[0]],
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description of project 2",
            users: [users[0], users[1]],
        },
    ];

    return (
        <div>
            <TSUserTable rows={users} />
            <br></br>
            <TSProjectTable rows={projects} />
        </div>
    );
}
