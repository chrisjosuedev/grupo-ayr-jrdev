import { useEffect, useMemo, useState } from "react";
import { useClientStore } from "../hooks"
import { AddNewButton, SpinnerLoader, ClientTable } from "./"
import { Messages } from "./Messages";

export const Main = () => {
    const { clients, startLoadingClients, isLoadingClients, startSetLoading } = useClientStore();

    const [infoMessage, setInfoMessage] = useState("");
    const [success, setSuccess] = useState(true);

    // Loading Clients
    useEffect(() => {
        const fetchData = async () => {
            try {
                await startLoadingClients();
                setSuccess(true);
            } catch (error) {
                setInfoMessage("Error fetching clientes, problemas en el servidor.");
                startSetLoading();
                setSuccess(false);
            }
        }
        fetchData();
    }, []);

    const renderTable = useMemo(() => {
        if (!success) {
            return (<Messages message={infoMessage} />)
        }
        if (clients.length === 0) {
            setInfoMessage("No hay registros de clientes.")
            return (<Messages message={infoMessage} />)
        }
        return (<ClientTable data={clients} />);
    }, [success, clients, infoMessage])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AddNewButton />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        {
                            isLoadingClients ? <SpinnerLoader /> : renderTable
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
