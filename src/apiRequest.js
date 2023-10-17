const apiRequest = async (url = '',optionsObj = null, errMsg = null) =>{

    try {
        const response = await fetch(url,optionsObj)         // await with ftech function by giving url and optionObj = POST,PATCH,PUT .....
        if (!response.ok) {                                  // if the response isnt ok then
            throw Error("Please Reload the Page!!")          // throw erre
        }   
    } catch (err) {
        errMsg = err.Message                                 // get the error
    }finally{
        return errMsg                                        // rtn error
    }


}

export default apiRequest