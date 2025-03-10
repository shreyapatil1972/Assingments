async function fetchUserData(userId){
    try{
        const response =await fetch(`https://api.example.com/users/${userId}`);
        if(!response.ok){
            throw new Error('Failed to Fetch User Data');
        }
        const userData = await response.json();
        return userData;
    }catch (error){
        throw new Error('Error fetching user data:'+error.message);
    }
}

fetchUserData(123)
   .then(data => console.log(data))
   .catch(error=>console.log(error));