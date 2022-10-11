import React from "react";
import ProductMaker from "../Components/ProductMaker/ProductMaker";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function CreateItemPage()
{
    const history = useHistory();

    async function createItem(e, productBody)
    {
        const url = process.env.REACT_APP_API_URL + "/Products/NewProduct";
        const config = {}

        await axios.post(url, productBody, config)
            .then((res) => {
                if(res.status === 201)
                {
                    history.push("/Item");
                }
                else
                {
                    history.push("/")
                }
            })
    }

    return(
        <div>
            <h1>Create Item</h1>
            <ProductMaker btnText="Create" handleAction={createItem} />
        </div>
    );
}

export default CreateItemPage;