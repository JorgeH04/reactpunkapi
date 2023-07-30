import { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import SliderSRM from "../components/SliderSRM";
import SliderPH from "../components/SliderPH";
import VolumeButton from "../components/VolumeButton";
import API_URL from "../data/api";
import { Pagination } from 'antd'
//import Slider from 'react-slider';
import { Slider, Switch } from 'antd';

function Home() {

    const [data, setData] = useState([])
    const [baseUrl, setBaseUrl] = useState(`${API_URL}`)
    const [srmRange, setSrmRange] = useState([0, 100]);

 
    const handleSrmChange = (value) => {
      setSrmRange(value);
    };

    // Fetch Data
    // useEffect(() => {
    //     fetch(baseUrl)
    //         .then(response => response.json())
    //         .then(json => {
    //             setData(json)
    //         })
    //         console.log(data)
    // }, [baseUrl])

    useEffect(() => {
      fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
          const filteredData = json.filter(item => item.srm >= srmRange[0] && item.srm <= srmRange[1]);
          setData(filteredData);
        });
    }, [baseUrl, srmRange]);




    return (
        <>
            <div className="row mx-0 d-flex">


            </div>
            <Slider
  range
  step={0.1} min={0} max={7}
  value={srmRange}
  onChange={handleSrmChange}
/>

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-0 mt-5">
                {
                    data.map((item) => 
                        <Card key={item.id} image_url={item.image_url} name={item.name} first_brewed={item.first_brewed} />
                    )
                }
            </div>
           
        </>
    )
}

export default Home












// import { useState, useEffect } from "react";
// import Search from "../components/Search";
// import Card from "../components/Card";
// import SliderSRM from "../components/SliderSRM";
// import SliderPH from "../components/SliderPH";
// import VolumeButton from "../components/VolumeButton";
// import API_URL from "../data/api";
// import { Pagination } from 'antd'
// import SliderRange from "../components/SliderRange";

// function Home() {

//     const baseUrl = 'https://api.punkapi.com/v2/beers'; 
//     const perPage = 10; // Número de objetos a mostrar por página
//     const [data, setData] = useState([]);
//     const [selectedPh, setSelectedPh] = useState(0);
//     const [filteredData, setFilteredData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
  
//     useEffect(() => {
//       fetch(baseUrl)
//         .then(response => response.json())
//         .then(json => {
//           setData(json);
//           setFilteredData(json);
//           setTotalPages(Math.ceil(json.length / perPage));
//         });
//     }, [baseUrl]);
  
//     useEffect(() => {
//       if (data.length > 0) {
//         const filtered = data.filter(obj => obj.ph >= selectedPh);
//         setTotalPages(Math.ceil(filtered.length / perPage));
//         setCurrentPage(1);
//         setFilteredData(filtered.slice(0, perPage));
//       }
//     }, [data, selectedPh, perPage]);
  
//     const handleSliderChange = event => {
//       const phValue = parseFloat(event.target.value);
//       setSelectedPh(phValue);
//     };
  
//     const handlePageChange = page => {
//       setCurrentPage(page);
//       const startIndex = (page - 1) * perPage;
//       const endIndex = startIndex + perPage;
//       setFilteredData(filteredData.slice(startIndex, endIndex));
//     };
 
 
//     return (
//         <>


//             <div className="row mx-0 d-flex">
//                 <div className="col-5 offset-3">

//                 </div>
//                 <div className="col-4">

//                 </div>
//             </div>
           
           
          
          
//             <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-0 mt-5">
//             {filteredData.map(item => (
//               <Card key={item.id} image_url={item.image_url} name={item.name} first_brewed={item.first_brewed} />
        
//             ))}
//        <div>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             disabled={currentPage === index + 1}
//           >
//             {index + 1}
//           </button>
//         ))}


//       </div>

    
//             </div>
         
//         </>
//     )
// }

// export default Home













