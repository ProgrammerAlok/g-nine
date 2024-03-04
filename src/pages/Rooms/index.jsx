import PageDescription from 'components/PageDescription';
import { RoomGallery } from 'components/Rooms';
import MainLayout from 'layout/MainLayout';

const Rooms = () => {
  const Data = [
    `Stylish and Cosmopolitan rooms at G NINE is perfect for quick get-away or attend a conference.`,
    `Hotel GNINE is enveloped in the prime locations of the city Surat with abundance in serenity and luxury with sheer comfort and 24×7 staff service. A modern interior with exemplify rich experience. Wide range of amenities to keep you on the edge and a success work/casual trip.`,
    `Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`    
  ];

  return (
    <MainLayout title={`Rooms`} image='' >
        <main>
            <PageDescription 
              title={`Hotel G Nine Surat`} 
              desctiption={`Stylish and Cosmopolitan rooms at G NINE is perfect for quick get-away or attend a conference.`}
              list={Data}
            />
            <RoomGallery />
        </main>
    </MainLayout>
  );
}

export default Rooms;