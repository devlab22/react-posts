import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching, PostService } from '../../components';
import { Circles } from 'react-loader-spinner';

import './Pages.scss';

export default function Post() {

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [dashboards, setDashboards] = useState({ count: 0, server: "demo"});

  const params = useParams();

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setPost(response.data)
  })

  const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data)
  })

  const [fetchDashboards, isLoadingDB, errorDB] = useFetching(async () => {
      const response = await PostService.getDashboards();
      console.log(response.data)
      setDashboards(response.data)
  })

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
    //fetchDashboards()

  }, []);

  if (error) {
    return (
      <div className='page'>
        <h1>{error}</h1>
      </div>
    )
  }

  return (
    <div className='page'>
      <h1>{`Post: ${params.id}`}</h1>

      {isLoading
        ? <div className='loader'>
          <Circles
            height="100"
            width="100"
            color="#008080"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        : <div>

          <strong> {post.id}. {post.title}</strong>
          <p>{post.body}</p>

        </div>
      }

      <h1>Comments for Post</h1>

      {
        isLoadingComments
          ? <div className='loader'>
            <Circles
              height="100"
              width="100"
              color="#008080"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          :
          <div>
            {
              comments.map(comment => (
              <div key={comment.id}>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>
              ))
            }
              
          </div>

      }

      <h1>Dashboards</h1>

      {
        isLoadingDB
          ? <div className='loader'>
            <Circles
              height="100"
              width="100"
              color="#008080"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          :
          <div>
            
           <p>{`count: ${dashboards.count}`}</p> 
           <p>{`server: ${dashboards.server}`}</p> 

           {
            Array.isArray(dashboards.dashboards) && dashboards.dashboards.map((item, index) => (
              <div key={index}> 
                <p>{`login: ${item.login}`}</p>
              </div>
            ))
           }
           
              
          </div>

      }
    </div>
  )
}
