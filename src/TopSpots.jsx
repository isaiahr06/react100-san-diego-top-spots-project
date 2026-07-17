import TopSpot from "./TopSpot";

const TopSpots = ({ spots }) => {
    console.log(spots[0]);
    return (
        
        <div data-testid="topspots">
            {spots.map(spot => (
                <TopSpot 
                key={spot.id}
                name={spot.name} 
                description={spot.description} 
                location={spot.location}
                />
            ))}
        </div>
    );
};

export default TopSpots;
