import React from 'react'

export default function getApiData() {

    const [stateData, updateData] = useState([]);

    const getCovidData = () =>{
        const url = "https://api.rootnet.in/covid19-in/stats/latest"
        fetch(url)
        .then(resp => resp.json())
        .then(res=>{
        console.log("this is the response", res.data)
        
        updateData(res.data.regional)
        })
        .catch(err=>{
          console.log("err",err)
        })
        console.log("this is the value of states", stateData)
      }
    
      useEffect(() => {
        getCovidData()
        }, []);
    return (
        <div>
            
        </div>
    )
}
