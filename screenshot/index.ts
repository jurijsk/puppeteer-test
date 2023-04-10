import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
	context.log("loaded crap");
    context.res = {
        body: "all good",
        headers: {
            "content-type": "text/plain"
        }
    }
}


export default httpTrigger;
