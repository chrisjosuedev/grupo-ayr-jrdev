import { Table , Actions} from "./";

const columns = [
    {
        header: "Nombre Completo",
        accessorKey: "fullName"
    },
    {
        header: "Teléfono",
        accessorKey: "phone"
    },
    {
        header: "Dirección",
        accessorKey: "address"
    },
    {
        header: "Email",
        accessorKey: "email"
    },
    {
        header: "",
        accessorKey: "id",
        cell: (props) => (<Actions values={props.getValue()} />)
    }
];

export const ClientTable = ({ data }) => {
    return (
        <Table 
            data={data}
            columns={columns}
            filterBy="Nombre, Email, Teléfono, Dirección..."
        />
    )
}
