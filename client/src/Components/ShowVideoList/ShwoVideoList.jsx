import React from 'react'
import { useSelector } from 'react-redux';
//import vid from "../../Components/Video/vid4.mp4";

import ShowVideo from '../ShowVideo/ShowVideo';
function ShwoVideoList({videoId}) {
  const vids=useSelector(s=>s.videoReducer)
  console.log(vids.data)
  //  const vids = [
  //      {
  //        _id: 1,
  //         filePath: '../../Components/Video/vid4.mp4',
  //         Chanel: "65defeb06688f9c3cd87811f",
  //         title: "video 1",
  //         Uploader:"abc",
  //         description: "description of  video 1"
  //       },
  //       {
  //         _id: 2,
  //         filePath: '../../Components/Video/vid4.mp4',
  //         Chanel: "cdd",
  //         title: "video 2",
  //         Uploader:"abc",
  //         description: "description of  video 2"
  //       },
  //       {
  //         _id: 3,
  //        filePath: '../../Components/Video/vid4.mp4',
  //        Chanel: "add",
  //         title: "video 3",
  //         Uploader:"abc",
  //         description: "description of  video 3"
  //  }, 
  //  {
  //    _id: 4,
  //    filePath: '../../Components/Video/vid4.mp4',
  //    Chanel: "add",
  //    title: "video 4",
  //    Uploader:"abc",
  //    description: "description of  video 4"
  //  },
  //     ];
  return (
  
    <div className='Container_ShowVideoGrid'>
   {
        vids?.data?.filter(q=>q._id===videoId).map(vi=>
          {
               return (
                      <div key={vi._id} className="video_box_app">
                          <ShowVideo vid={vi}/>
                    
                      </div>
                  )
             })  
     } 
       
       </div> 
      
 )
}

export default ShwoVideoList
