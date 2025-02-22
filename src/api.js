async function handleLogin(values) {
  //values is an object that contain {email, password}
  try {

    const res = await fetch("/login", {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const data = await  res.json()
    // console.log(data)

    if (!data.ok) {
       throw ({
        message: data.message,
        status: data.status
      })
    }

   
    return data;

  }catch(error){
    return (error)
  }


}

export {handleLogin}