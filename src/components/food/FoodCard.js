import React from 'react';

 

export const  FoodCard = ({ place, selected, refProp }) => {
    

    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-64 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={place.photo ? place.photo.images.large.url : "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}
                    alt={place.name}
                />
            </div>
            <div className="mt-4">
                <h5 className="text-2xl font-semibold">{place.name}</h5>
                <div className="flex justify-between mt-2">
                    {/* <Rating value={Number(place.rating)} readOnly /> */}
                    <p className="text-sm">{place.num_reviews} reviews</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className="text-sm">Price</p>
                    <p className="text-sm">{place.price_level}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className="text-sm">Ranking</p>
                    <p className="text-sm">{place.ranking}</p>
                </div>
                {place?.awards?.map((award) => (
                    <div key={award.display_name} className="my-1 flex justify-between items-center">
                        <img src={award.images.small} alt={award.display_name} className="w-4 h-4" />
                        <p className="text-xs text-gray-500">{award.display_name}</p>
                    </div>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <span key={name} className={`inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full `}>
                        {name}
                    </span>
                ))}
                {place?.address && (
                    <p className={`mt-2 text-sm text-gray-500  `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm0 0v6a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2h-2a2 2 0 0 1-2 2z" />
                        </svg>
                        {place.address}
                    </p>
                )}
                {place?.phone && (
                    <p className={`mt-2 text-sm text-gray-500 `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0 1 9-9zm-2 3v8m0 0v4m0-4h4m-4 0H4"></path>
                        </svg>
                        {place.phone}
                    </p>
                )}
                <div className="mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => window.open(place.web_url, '_blank')}
                    >
                        Trip Advisor
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        onClick={() => window.open(place.website, '_blank')}
                    >
                        Website
                    </button>
                </div>
            </div>
        </div>
    );
};
