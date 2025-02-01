import { useEffect } from "react";
import HorizontalImageSlider from "../Components/HorizentalSlider";
import HorizontalCardList from "../Components/HorizontalCardView";
import ImageGrid from "../Components/ImageGrid";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { getCardDetails } from "../Redux/Store.Actions";
import Banner from "../Components/Banner";


function Home() {
  const dispatch = useAppDispatch();
  const { store } = useAppSelector((state) => state.store);

  useEffect(() => {
    dispatch(getCardDetails());
  }, [dispatch]);
  
  return (
    <div className="home-container">
      {store.objects && store.objects.length && 
          store.objects.map((el: any, idx: number) =>
            idx === 0 ?  <div className="main-container"><Banner data={el} /></div> :
            idx === 1 ? <div className="main-container"><HorizontalImageSlider data={el} /></div> :
            idx === 2 ? <ImageGrid data={el.data} /> :                                    
            <div className="section relative" key={idx}>
            <h3 className="section-title">{el.header_config.title}</h3>
            <HorizontalCardList products={el.objects[0].data.products} />
            </div>          
            )
        }
    </div>
  );
}

export default Home;
