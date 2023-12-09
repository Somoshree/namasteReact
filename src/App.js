import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";

const resList = [{
    id: 674226,
    cloudinaryImageId: "54c915c8fb58bb31df56340d19250b38",
    restaurantname: "New Kings Restaurants",
    costForTwo: "₹250 for two",
    avgRating: 3.8,
    deliveryTime: 36,
    cuisines: ["South Indian","Kerala","Biryani","Chinese"]
},
{
    id: 78852,
    cloudinaryImageId: "86f52324ecee5fc94cbf63c4a568b672",
    restaurantname: "Chicking",
    costForTwo: "300 for two",
    avgRating: 4.0,
    deliveryTime: 40,
    cuisines: ["Snacks","Grill","Fast Food"]
}]

const RestaurantCard= (props) => {
    const {resdata}=props;
    const {cloudinaryImageId,restaurantname,cuisines,avgRating,costForTwo,deliveryTime} = resdata
    console.log(cuisines)
    return (
    <div className="restaurantCard">
        <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
        cloudinaryImageId}></img>
        <h3>{restaurantname}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
    </div>
)}

const BodyComponent = () => (
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className="restaurantContainer">
            {
                resList.map((restaurant) => <RestaurantCard key={restaurant.id} resdata={restaurant} />)
            }
            
            {/* <RestaurantCard resdata = {resList[0]} />
            <RestaurantCard resdata = {resList[1]} /> */}
        </div>
    </div>
)

const AppLayout = () => (
    <div className="app">
        <HeaderComponent />
        <BodyComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);