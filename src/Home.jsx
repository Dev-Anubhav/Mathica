import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from './imagehelper';
import img from "./assets/Abstract Shapes 2.png"

const Home = () => {
    
    

    const genAI = new GoogleGenerativeAI("AIzaSyADJX3f5RF4G7zxtxjZsL7mHEfR8gpvsmk");

    const [image, setImage] = useState('');
    const [imageInineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch image insights
     */
    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        
        const result = await model.generateContent([
            "first read question in the image correctly than give accurate solution", imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        aiImageRun();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch(e => console.log(e))

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    }

    // Converts a File object to a GoogleGenerativeAI.Part object.
    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <>
<div className="home">
  <div className="container">
    <div className="row">
      <div className="col-7 col-m-12">
        <h2><span className="blue">Intelligent</span> Ai-based 
Problem solving tool</h2>
<p className='text'>Experience the power of smart problem solving and transform the way you work today.</p>
      <div style={{ display: 'flex' }}>
                    <input type='file' onChange={(e) => handleImageChange(e)} />
                    <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
                </div>
                <img src={image} style={{ marginTop: 30 }} />
      </div>
      <div className="col-5 order col-m-12">
        <div className="hero-img">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
          

            <div className="row">
              <div className="col-6 col-m-12">
              {
                loading == true && (aiResponse == '') ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0' }}>
                        <p>{aiResponse}</p>
                    </div>
            }
              </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Home;