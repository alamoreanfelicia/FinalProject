class DeleteHTTP {

    // Make an HTTP PUT Request
    async delete(url) {

        // Awaiting fetch which contains 
        // method, headers and content-type
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        // Awaiting for the resource to be deleted
        const resData = 'resource deleted...';

        // Return response data 
        return resData;
    }
}

function reply_click(clicked_object) {
    const http = new DeleteHTTP;
    http.delete(`http://localhost:3000/products/${clicked_object.getAttribute('idd')}`).then(window.location.reload())
}