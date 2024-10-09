"use client";
import { useRouter } from "next/router";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { items } from "../../../public/Items.json";
import QRCode from 'qrcode.react';
const Payments = () => {
    
    const [transactionId, setTransactionId] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Generate a random Transaction ID
        const randomId = Math.floor(1000000000 + Math.random() * 9000000000).toString();
        setTransactionId(randomId);

        // Get the current date
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    const { bootstrap2 } = items;
    const [products, setProducts] = useState({});
    const [valuea, setValue] = useState(null);
    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedValue = localStorage.getItem('price');
            setValue(storedValue);
        }
    }, []);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            };

            const response = await fetch('/api/upichange', {
                method: 'GET',
                headers: headersList,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.upi.upi);
                setProducts(data.upi);
                setActiveTab(data.upi.Gpay === false ? data.upi.Phonepe === false ? 4 : 3 : 2)
            } else {
                console.error('Error fetching products:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }

    };
    const [user13, setuser13] = useState({})
    const [data, setdata] = useState({})
    const router = useRouter();

    const [activeTab, setActiveTab] = useState(2);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    const initialTime = 300; // 10 minutes in seconds
    const [time, setTime] = useState(initialTime);
    const [payment, setPayment] = useState("");
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            if (time <= 0) {
                clearInterval(timer);
            } else {
                setTime((prevTime) => prevTime - 1);
            }
        }, 1000);
        if (typeof window !== "undefined") {
            setuser13(JSON.parse(localStorage.getItem("user")) || {});
            setdata(JSON.parse(localStorage.getItem("data")) || {});
        }
        return () => {
            clearInterval(timer);
        };
    }, [time]);
    useEffect(() => {
        switch (activeTab) {
            case 4:
                setPayment(`paytmmp://cash_wallet?pa=${products.upi}&pn=name&mc=7692&tr=&tn=BIG&am=${Number(
                    router.query.id?.split('.')[0]
                )}&cu=INR&tn=1109653558&tr=1109653558&url=&mode=02&purpose=00&orgid=159002&sign=MEQCIDsRrRTBN5u+J9c16TUURJ4IMiPQQ/Sj1WXW7Ane85mYAiBuwEHt/lPXmMKRjFFnz6+jekgTsKWwyTx44qlCXFkfpQ==&featuretype=money_transfer`);

                break;
            case 1:
                setPayment(`paytmmp://cash_wallet?pa=${products.upi}&pn=name&mc=7692&tr=&tn=BIG&am=${Number(
                    router.query.id?.split('.')[0]
                )}&cu=INR&tn=1109653558&tr=1109653558&url=&mode=02&purpose=00&orgid=159002&sign=MEQCIDsRrRTBN5u+J9c16TUURJ4IMiPQQ/Sj1WXW7Ane85mYAiBuwEHt/lPXmMKRjFFnz6+jekgTsKWwyTx44qlCXFkfpQ==&featuretype=money_transfer`);

                break;
            case 2:
                setPayment(`paytmmp://cash_wallet?pa=${products.upi}&pn=name&mc=7692&tr=&tn=BIG&am=${Number(
                    router.query.id?.split('.')[0])}&cu=INR&tn=1109653558&tr=1109653558&url=&mode=02&purpose=00&orgid=159002&sign=MEQCIDsRrRTBN5u+J9c16TUURJ4IMiPQQ/Sj1WXW7Ane85mYAiBuwEHt/lPXmMKRjFFnz6+jekgTsKWwyTx44qlCXFkfpQ==&featuretype=money_transfer`);

                break;
            case 3:
                setPayment(`phonepe://pay?pa=${products.upi}&pn=KHODIYAR%20ENTERPRISE&mc=&tn=Verified%20Merchant&am=${Number(
                    router.query.id?.split('.')[0]
                )}&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCIB4NcyZl2FEuktegagtryRG1iA1XG9r3tMHCIGZmR0wQAiBPvbuBFfhZjmq3MKMKH/XouOPk2+STl/VwYQTg2Y7vWg==`);

                break;
            case 5:
                setPayment(`paytmmp://cash_wallet?pa=${products.upi}&pn=name&mc=7692&tr=&tn=BIG&am=${Number(
                    router.query.id?.split('.')[0]
                )}&cu=INR&tn=1109653558&tr=1109653558&url=&mode=02&purpose=00&orgid=159002&sign=MEQCIDsRrRTBN5u+J9c16TUURJ4IMiPQQ/Sj1WXW7Ane85mYAiBuwEHt/lPXmMKRjFFnz6+jekgTsKWwyTx44qlCXFkfpQ==&featuretype=money_transfer`);
                break;

            default:
                break;
        }
    }, [activeTab, products.upi]);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const onBuyClicked = () => {
        if (!window.PaymentRequest) {
            alert("Web payments are not supported in this browser.");
            return;
        }

        const supportedInstruments = [
            {
                supportedMethods: ["https://tez.google.com/pay"],
                data: {
                    pa: products.upi, // Replace with your Merchant UPI ID
                    pn: "Merchant Name", // Replace with your Merchant Name
                    tr: "1234ABCD", // Your custom transaction reference ID
                    url: "https://yourwebsite.com/order/1234ABCD", // URL of the order in your website
                    mc: "1234", // Your merchant category code
                    tn: "Purchase in Merchant", // Transaction note
                },
            },
        ];

        const details = {
            total: {
                label: "Total",
                amount: {
                    currency: "INR",
                    value: router.query.id?.split('.')[0], // Amount to be paid
                },
            },
            displayItems: [
                {
                    label: "Original Amount",
                    amount: {
                        currency: "INR",
                        value: router.query.id?.split('.')[0],
                    },
                },
            ],
        };

        let request = null;
        try {
            request = new PaymentRequest(supportedInstruments, details);
        } catch (e) {
            alert("Payment Request Error: " + e.message);
            return;
        }
        if (!request) {
            alert("Web payments are not supported in this browser.");
            return;
        }

        checkCanMakePayment(request)
            .then((result) => {
                showPaymentUI(request, result);
            })
            .catch((err) => {
                alert("Error calling checkCanMakePayment: " + err);
            });
    };

    const checkCanMakePayment = (request) => {
        const canMakePaymentCache = "canMakePaymentCache";

        if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
            return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
        }

        var canMakePaymentPromise = Promise.resolve(true);

        if (request.canMakePayment) {
            canMakePaymentPromise = request.canMakePayment();
        }

        return canMakePaymentPromise
            .then((result) => {
                sessionStorage[canMakePaymentCache] = result;
                return result;
            })
            .catch((err) => {
                alert("Error calling canMakePayment: " + err);
            });
    };

    const showPaymentUI = (request, canMakePayment) => {
        if (!canMakePayment) {
            alert("Google Pay is not ready to pay.");
            return;
        }

        let paymentTimeout = window.setTimeout(() => {
            window.clearTimeout(paymentTimeout);
            request
                .abort()
                .then(() => {
                    alert("Payment timed out.");
                })
                .catch(() => {
                    alert("Unable to abort, user is in the process of paying.");
                });
        }, 20 * 60 * 1000); /* 20 minutes */

        request
            .show()
            .then((instrument) => {
                router.push({
                    pathname: '/PaymentConfirmation',
                    query: {
                        transactionId: transactionId,
                        amount: router.query.id?.split('.')[0], // Example amount
                        status: 'done',
                        date: currentDate,
                    }
                });
            })
            .catch((err) => {
                setTimeout(() => {
                    router.push({
                        pathname: '/PaymentFailed',
                        query: {
                            transactionId: transactionId,
                            amount: router.query.id?.split('.')[0], // Example amount
                            amount1: router.query.id?.split('.')[1], // Example amount
                            status: 'Failed',
                            date: currentDate,
                        }
                    });
                }, 1000);
            });
    };
    console.log(products);
    return (<>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
            Jio - Best Prepaid, Postpaid Plans, Broadband Connection, Apps, &amp; More
        </title>
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
                __html:
                    ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}'
            }}
        />
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
                __html:
                    ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}'
            }}
        />
        <link rel="icon" type="/uploads/x-icon" href="/uploads/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="css/all.css" />
        <link rel="stylesheet" type="text/css" href="css/brands.css" />
        <link rel="stylesheet" type="text/css" href="css/fontawesome.css" />
        <link rel="stylesheet" type="text/css" href="css/regular.css" />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <link rel="stylesheet" type="text/css" href="css/solid.css" />
        <link rel="stylesheet" type="text/css" href="css/owl.theme.default.css" />
        <link rel="stylesheet" type="text/css" href="css/owl.theme.green.css" />
        <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
                __html:
                    "\n        body {\n          -webkit-transition: background-color 800ms ease;\n          transition: background-color 800ms ease;\n        }\n        body.dark {\n          background-color: #1e293b;\n          color: #fff;\n        }\n        body.dark .ham{\n          background-color: #1e293b;\n        }\n        body.dark table tr td{\n          color: white !important;\n        }\n        body.dark table tr td:hover{\n          color: black !important;\n        }\n        body.dark .foot  p{\n          color: white !important;\n        }\n        body.dark .foot  li{\n          color: white !important;\n        }\n    "
            }}
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    '/* ! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:\'\'}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-0{left:0px}.top-\\[4\\.2rem\\]{top:4.2rem}.bottom-4{bottom:1rem}.right-4{right:1rem}.bottom-10{bottom:2.5rem}.bottom-5{bottom:1.25rem}.bottom-\\[10\\%\\]{bottom:10%}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.col-span-4{grid-column:span 4 / span 4}.col-span-2{grid-column:span 2 / span 2}.row-span-2{grid-row:span 2 / span 2}.float-left{float:left}.m-0{margin:0px}.mx-auto{margin-left:auto;margin-right:auto}.my-12{margin-top:3rem;margin-bottom:3rem}.mx-3{margin-left:0.75rem;margin-right:0.75rem}.my-2\\.5{margin-top:0.625rem;margin-bottom:0.625rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-4{margin-left:1rem;margin-right:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.ml-2{margin-left:0.5rem}.mr-7{margin-right:1.75rem}.mt-1{margin-top:0.25rem}.mt-5{margin-top:1.25rem}.mt-8{margin-top:2rem}.mr-2{margin-right:0.5rem}.mb-20{margin-bottom:5rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-10{margin-top:2.5rem}.mb-6{margin-bottom:1.5rem}.mt-12{margin-top:3rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.box-border{box-sizing:border-box}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-3\\/4{height:75%}.h-9{height:2.25rem}.h-full{height:100%}.h-screen{height:100vh}.h-2\\/5{height:40%}.h-max{height:max-content}.h-64{height:16rem}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-40{height:10rem}.h-96{height:24rem}.w-11\\/12{width:91.666667%}.w-3\\/4{width:75%}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:max-content}.w-9\\/12{width:75%}.w-14{width:3.5rem}.w-16{width:4rem}.w-2\\/5{width:40%}.w-4\\/5{width:80%}.w-40{width:10rem}@keyframes bounce{0%, 100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}.animate-bounce{animation:bounce 1s infinite}.cursor-pointer{cursor:pointer}.grid-flow-row-dense{grid-auto-flow:row dense}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.grid-rows-2{grid-template-rows:repeat(2, minmax(0, 1fr))}.grid-rows-3{grid-template-rows:repeat(3, minmax(0, 1fr))}.grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-center{justify-items:center}.gap-16{gap:4rem}.gap-3{gap:0.75rem}.gap-x-10{column-gap:2.5rem}.space-x-12 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(3rem * var(--tw-space-x-reverse));margin-left:calc(3rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.justify-self-start{justify-self:start}.justify-self-end{justify-self:end}.overflow-y-auto{overflow-y:auto}.scroll-smooth{scroll-behavior:smooth}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-xl{border-radius:0.75rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-l-3xl{border-top-left-radius:1.5rem;border-bottom-left-radius:1.5rem}.rounded-r-3xl{border-top-right-radius:1.5rem;border-bottom-right-radius:1.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-4{border-width:4px}.border-\\[1px\\]{border-width:1px}.border-b-2{border-bottom-width:2px}.border-r-2{border-right-width:2px}.border-t-2{border-top-width:2px}.border-solid{border-style:solid}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}.border-slate-400{--tw-border-opacity:1;border-color:rgb(148 163 184 / var(--tw-border-opacity))}.border-indigo-400{--tw-border-opacity:1;border-color:rgb(129 140 248 / var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))}.border-indigo-300{--tw-border-opacity:1;border-color:rgb(165 180 252 / var(--tw-border-opacity))}.bg-blue-700{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.bg-blue-900{--tw-bg-opacity:1;background-color:rgb(30 58 138 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[\\#0a2885\\]{--tw-bg-opacity:1;background-color:rgb(10 40 133 / var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-\\[\\#0f3cc9\\]{--tw-bg-opacity:1;background-color:rgb(15 60 201 / var(--tw-bg-opacity))}.bg-blue-200{--tw-bg-opacity:1;background-color:rgb(191 219 254 / var(--tw-bg-opacity))}.bg-indigo-300{--tw-bg-opacity:1;background-color:rgb(165 180 252 / var(--tw-bg-opacity))}.bg-white\\/100{background-color:rgb(255 255 255 / 1)}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.bg-cyan-500{--tw-bg-opacity:1;background-color:rgb(6 182 212 / var(--tw-bg-opacity))}.bg-cyan-700{--tw-bg-opacity:1;background-color:rgb(14 116 144 / var(--tw-bg-opacity))}.bg-emerald-300{--tw-bg-opacity:1;background-color:rgb(110 231 183 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.bg-green-700{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.bg-orange-500{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))}.bg-orange-700{--tw-bg-opacity:1;background-color:rgb(194 65 12 / var(--tw-bg-opacity))}.bg-sky-300{--tw-bg-opacity:1;background-color:rgb(125 211 252 / var(--tw-bg-opacity))}.bg-green-800{--tw-bg-opacity:1;background-color:rgb(22 101 52 / var(--tw-bg-opacity))}.bg-purple-100{--tw-bg-opacity:1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.p-0{padding:0px}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-2{padding:0.5rem}.px-1{padding-left:0.25rem;padding-right:0.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3\\.5{padding-left:0.875rem;padding-right:0.875rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-\\[1\\.125rem\\]{padding-top:1.125rem;padding-bottom:1.125rem}.px-20{padding-left:5rem;padding-right:5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-9{padding-top:2.25rem;padding-bottom:2.25rem}.pl-4{padding-left:1rem}.pt-1{padding-top:0.25rem}.pb-4{padding-bottom:1rem}.pb-5{padding-bottom:1.25rem}.pt-16{padding-top:4rem}.pt-5{padding-top:1.25rem}.pt-6{padding-top:1.5rem}.pr-12{padding-right:3rem}.pr-3{padding-right:0.75rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-start{text-align:start}.font-\\[helvetica\\]{font-family:helvetica}.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[14px\\]{font-size:14px}.text-\\[18px\\]{font-size:18px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[12px\\]{font-size:12px}.text-\\[16px\\]{font-size:16px}.text-5xl{font-size:3rem;line-height:1}.font-black{font-weight:900}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-extrabold{font-weight:800}.tracking-tight{letter-spacing:-0.025em}.text-\\[\\#0a2885\\]{--tw-text-opacity:1;color:rgb(10 40 133 / var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-yellow-500{--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-indigo-200{--tw-text-opacity:1;color:rgb(199 210 254 / var(--tw-text-opacity))}.text-neutral-500{--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))}.text-zinc-500{--tw-text-opacity:1;color:rgb(113 113 122 / var(--tw-text-opacity))}.text-blue-800{--tw-text-opacity:1;color:rgb(30 64 175 / var(--tw-text-opacity))}.text-green-100{--tw-text-opacity:1;color:rgb(220 252 231 / var(--tw-text-opacity))}.text-sky-800{--tw-text-opacity:1;color:rgb(7 89 133 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-blue-900{--tw-text-opacity:1;color:rgb(30 58 138 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-indigo-300{--tw-text-opacity:1;color:rgb(165 180 252 / var(--tw-text-opacity))}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-black{--tw-shadow-color:#000;--tw-shadow:var(--tw-shadow-colored)}.shadow-slate-800{--tw-shadow-color:#1e293b;--tw-shadow:var(--tw-shadow-colored)}.shadow-slate-500{--tw-shadow-color:#64748b;--tw-shadow:var(--tw-shadow-colored)}.shadow-slate-700{--tw-shadow-color:#334155;--tw-shadow:var(--tw-shadow-colored)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.hover\\:border-slate-200:hover{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}.hover\\:border-slate-600:hover{--tw-border-opacity:1;border-color:rgb(71 85 105 / var(--tw-border-opacity))}.hover\\:border-white:hover{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))}.hover\\:bg-purple-100:hover{--tw-bg-opacity:1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.hover\\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.hover\\:bg-blue-900:hover{--tw-bg-opacity:1;background-color:rgb(30 58 138 / var(--tw-bg-opacity))}.hover\\:bg-indigo-400:hover{--tw-bg-opacity:1;background-color:rgb(129 140 248 / var(--tw-bg-opacity))}.hover\\:bg-blue-300:hover{--tw-bg-opacity:1;background-color:rgb(147 197 253 / var(--tw-bg-opacity))}.hover\\:bg-green-800:hover{--tw-bg-opacity:1;background-color:rgb(22 101 52 / var(--tw-bg-opacity))}.hover\\:bg-sky-500:hover{--tw-bg-opacity:1;background-color:rgb(14 165 233 / var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-purple-300:hover{--tw-bg-opacity:1;background-color:rgb(216 180 254 / var(--tw-bg-opacity))}.hover\\:text-blue-300:hover{--tw-text-opacity:1;color:rgb(147 197 253 / var(--tw-text-opacity))}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246 / var(--tw-ring-opacity))}@media (min-width: 640px){.sm\\:grid{display:grid}.sm\\:h-72{height:18rem}.sm\\:w-1\\/2{width:50%}.sm\\:w-max{width:max-content}.sm\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.sm\\:grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:text-center{text-align:center}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width: 768px){.md\\:bottom-\\[20\\%\\]{bottom:20%}.md\\:col-start-1{grid-column-start:1}.md\\:col-start-2{grid-column-start:2}.md\\:row-start-1{grid-row-start:1}.md\\:mt-12{margin-top:3rem}.md\\:grid{display:grid}.md\\:h-\\[17\\.5rem\\]{height:17.5rem}.md\\:w-3\\/5{width:60%}.md\\:w-11\\/12{width:91.666667%}.md\\:w-5\\/6{width:83.333333%}.md\\:w-1\\/2{width:50%}.md\\:w-3\\/4{width:75%}.md\\:grid-cols-6{grid-template-columns:repeat(6, minmax(0, 1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\\:grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr))}.md\\:items-center{align-items:center}.md\\:py-20{padding-top:5rem;padding-bottom:5rem}.md\\:pl-20{padding-left:5rem}.md\\:pt-32{padding-top:8rem}.md\\:text-center{text-align:center}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-6xl{font-size:3.75rem;line-height:1}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:col-start-1{grid-column-start:1}.lg\\:col-start-2{grid-column-start:2}.lg\\:col-end-2{grid-column-end:2}.lg\\:col-end-3{grid-column-end:3}.lg\\:row-start-1{grid-row-start:1}.lg\\:row-start-2{grid-row-start:2}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-80{height:20rem}.lg\\:w-1\\/2{width:50%}.lg\\:w-3\\/4{width:75%}.lg\\:w-1\\/3{width:33.333333%}.lg\\:w-3\\/5{width:60%}.lg\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.lg\\:grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr))}.lg\\:items-center{align-items:center}.lg\\:justify-around{justify-content:space-around}.lg\\:justify-evenly{justify-content:space-evenly}.lg\\:gap-0{gap:0px}.lg\\:gap-5{gap:1.25rem}.lg\\:space-x-10 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2.5rem * var(--tw-space-x-reverse));margin-left:calc(2.5rem * calc(1 - var(--tw-space-x-reverse)))}.lg\\:justify-self-end{justify-self:end}.lg\\:px-32{padding-left:8rem;padding-right:8rem}.lg\\:pt-72{padding-top:18rem}.lg\\:text-6xl{font-size:3.75rem;line-height:1}.lg\\:text-5xl{font-size:3rem;line-height:1}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem}.lg\\:hover\\:bg-blue-900:hover{--tw-bg-opacity:1;background-color:rgb(30 58 138 / var(--tw-bg-opacity))}}@media (min-width: 1280px){.xl\\:h-64{height:16rem}.xl\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.xl\\:pt-96{padding-top:24rem}}'
            }}
        />
        <link
            id="USE_CHAT_GPT_AI_CONTENT_CSS_LINK_TAG"
            rel="stylesheet"
            href="chrome-extension://mhnlakgilnojmhinhkckjpncpbhabphi/content.css"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <style
            id="_goober"
            dangerouslySetInnerHTML={{
                __html:
                    " .go1475592160{height:0;}.go1671063245{height:auto;}.go1888806478{display:flex;flex-wrap:wrap;flex-grow:1;}@media (min-width:600px){.go1888806478{flex-grow:initial;min-width:288px;}}.go167266335{background-color:#313131;font-size:0.875rem;line-height:1.43;letter-spacing:0.01071em;color:#fff;align-items:center;padding:6px 16px;border-radius:4px;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);}.go3162094071{padding-left:20px;}.go3844575157{background-color:#313131;}.go1725278324{background-color:#43a047;}.go3651055292{background-color:#d32f2f;}.go4215275574{background-color:#ff9800;}.go1930647212{background-color:#2196f3;}.go946087465{display:flex;align-items:center;padding:8px 0;}.go703367398{display:flex;align-items:center;margin-left:auto;padding-left:16px;margin-right:-8px;}.go3963613292{width:100%;position:relative;transform:translateX(0);top:0;right:0;bottom:0;left:0;min-width:288px;}.go1141946668{box-sizing:border-box;display:flex;max-height:100%;position:fixed;z-index:1400;height:auto;width:auto;transition:top 300ms ease 0ms,right 300ms ease 0ms,bottom 300ms ease 0ms,left 300ms ease 0ms,max-width 300ms ease 0ms;pointer-events:none;max-width:calc(100% - 40px);}.go1141946668 .notistack-CollapseWrapper{padding:6px 0px;transition:padding 300ms ease 0ms;}@media (max-width:599.95px){.go1141946668{width:100%;max-width:calc(100% - 32px);}}.go3868796639 .notistack-CollapseWrapper{padding:2px 0px;}.go3118922589{top:14px;flex-direction:column;}.go1453831412{bottom:14px;flex-direction:column-reverse;}.go4027089540{left:20px;}@media (min-width:600px){.go4027089540{align-items:flex-start;}}@media (max-width:599.95px){.go4027089540{left:16px;}}.go2989568495{right:20px;}@media (min-width:600px){.go2989568495{align-items:flex-end;}}@media (max-width:599.95px){.go2989568495{right:16px;}}.go4034260886{left:50%;transform:translateX(-50%);}@media (min-width:600px){.go4034260886{align-items:center;}}"
            }}
        />

        <div className="pb-3">
            <div class="css-1o8mmck"><div class="css-3q6h74 j-text j-text-body-s" data-testid="dt-mobile-number">Amount payable: <b>₹ {router.query.id?.split('.')[0]}</b></div><div class="detail css-1ae5on8 j-text j-text-body-xs-bold"><b>Details</b></div></div>
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                {bootstrap2.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                        <img src={item.imageUrl} alt="slides" className='' style={{
                        }} />
                    </Carousel.Item>
                ))}
            </Carousel></div>
        <div className="p-4">
            <h1 style={{ fontFamily: 'JioType,helvetica,arial,sans-serif', fontWeight: 900, textTransform: 'none', fontSize: '1rem', letterSpacing: '-.48px', lineHeight: '1.25' }}>
                UPI </h1>
            <div className="px-2 mt-3 bg-light" style={{ borderRadius: 12 }}>
                <div className="css-jl6x1l py-3 px-2" >
                    <span style={{
                        width: '39px', marginRight: '12px', fontSize: '16px', /* height: '72px', */
                        padding: '6px', borderRadius: '50%', color: '#0f3cc9', background: '#c1c8df', justifyContent: 'space-evenly', WebkitBoxAlign: 'center', alignItems: 'center'
                    }}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9a1 1 0 00-1-1h-5a1 1 0 000 2h2a1 1 0 110 2h-1a1 1 0 00-.45 1.89l4 2a.931.931 0 00.45.11 1 1 0 00.89-.55 1 1 0 00-.39-1.34l-1.56-.78a3 3 0 00.88-3.33h.18a1 1 0 001-1zM12 2A10 10 0 002 12c-.002.374.021.749.07 1.12a1.007 1.007 0 002-.24A8.493 8.493 0 014 12a8 8 0 112.73 6h.77a1 1 0 000-2h-3a1 1 0 00-1 1v3a1 1 0 002 0v-.43A10 10 0 1012 2z" fill="currentColor" /></svg></span>
                    <div className="css-1lmrfbf"><div className="css-aivj5c j-text j-text-body-xs" style={{ colorText: 'var(--color-primary-grey-100)' }}><b>Pay via UPI ID</b></div></div><span className="css-1kmq01c j-icon" style={{ iconSizeSvg: '100%', iconSize: '1.5rem', iconColor: 'var(--color-primary-50)' }}>
                    </span></div>
                {products.Phonepe && <label htmlFor="unisex" className="css-jl6x1l py-3 px-2" onClick={() => {
                    setActiveTab(3)
                }}>
                    <span style={{
                        width: '39px', marginRight: '12px', fontSize: '16px', /* height: '72px', */
                        borderRadius: '50%', color: '#0f3cc9', background: '#c1c8df', justifyContent: 'space-evenly', WebkitBoxAlign: 'center', alignItems: 'center'
                    }}>
                        <img src="/uploads/phonepe.558dd7fea5d980ccf2c8.png" className="img-fluid" width={39} />
                    </span>
                    <div className="css-1lmrfbf"><div className="css-aivj5c j-text j-text-body-xs" style={{ colorText: 'var(--color-primary-grey-100)' }}><b>Phone Pe</b></div></div><span className="css-1kmq01c j-icon" style={{ iconSizeSvg: '100%', iconSize: '1.5rem', iconColor: 'var(--color-primary-50)' }}>
                        <input type="radio" name="gender" value="unisex" defaultChecked id="unisex" />
                    </span>
                </label>}
                {products.Gpay && <label htmlFor="male" className="css-jl6x1l py-3 px-2" onClick={() => {
                    setActiveTab(2)
                }}>
                    <span style={{
                        width: '39px', marginRight: '12px', fontSize: '16px', /* height: '72px', */
                        borderRadius: '50%', color: '#0f3cc9', background: '#c1c8df', justifyContent: 'space-evenly', WebkitBoxAlign: 'center', alignItems: 'center'
                    }}>
                        <img src="/uploads/googlepay.208572a29d30bdec956c.png" className="img-fluid" width={39} />
                    </span>
                    <div className="css-1lmrfbf"><div className="css-aivj5c j-text j-text-body-xs" style={{ colorText: 'var(--color-primary-grey-100)' }}><b>Google Pay</b></div></div><span className="css-1kmq01c j-icon" style={{ iconSizeSvg: '100%', iconSize: '1.5rem', iconColor: 'var(--color-primary-50)' }}>
                        <input type="radio" name="gender" value="male" id="male" />
                    </span></label>}
                {products.Paytm && <label htmlFor="female" className="css-jl6x1l py-3 px-2" onClick={() => {
                    setActiveTab(4)
                }}>
                    <span style={{
                        width: '39px', marginRight: '12px', fontSize: '16px', /* height: '72px', */
                        borderRadius: '50%', color: '#0f3cc9', background: '#c1c8df', justifyContent: 'space-evenly', WebkitBoxAlign: 'center', alignItems: 'center'
                    }}>
                        <img src="/uploads/paytm_icon-icons.com_62778.a23c686df5f6d427a319.png" className="img-fluid" width={39} />
                    </span>
                    <div className="css-1lmrfbf"><div className="css-aivj5c j-text j-text-body-xs" style={{ colorText: 'var(--color-primary-grey-100)' }}><b>Paytm</b></div></div><span className="css-1kmq01c j-icon" style={{ iconSizeSvg: '100%', iconSize: '1.5rem', iconColor: 'var(--color-primary-50)' }}>

                        <input type="radio" name="gender" value="female" id="female" /></span></label>}
            </div>
        </div>
        <button
            className="buynow-button product-page-buy col-6 btn-continue text-center"
            style={{ width: '50%', margin: '12px auto', textAlign: 'center', display: 'block', background: '#0f3cc9', color: '#fff !importent', padding: '9px' }}
            onClick={() => {
                if (activeTab == 2) {
                    onBuyClicked()
                } else {

                    const paymentUrl = payment
                    window.open(paymentUrl, "_blank");
                }
            }
            }
        >
            <a className="text-light"
            >Pay Now</a>
        </button>
        <div className="p-4">
            <h1 style={{ fontFamily: 'JioType,helvetica,arial,sans-serif', fontWeight: 900, textTransform: 'none', fontSize: '1rem', letterSpacing: '-.48px', lineHeight: '1.25' }}>
                How would you want to pay?

            </h1>
            <div className="px-2 mt-3 bg-light" style={{ borderRadius: 12 }}>
                <div className="css-jl6x1l pt-3 px-2" >
                    <span style={{
                        width: '39px', marginRight: '12px', fontSize: '16px', /* height: '72px', */
                        padding: '6px', borderRadius: '50%', color: '#0f3cc9', background: '#c1c8df', justifyContent: 'space-evenly', WebkitBoxAlign: 'center', alignItems: 'center'
                    }}> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4a2 2 0 00-2 2v2h20V7a2 2 0 00-2-2zM2 17a2 2 0 002 2h16a2 2 0 002-2v-6H2v6zm3-2h3a1 1 0 010 2H5a1 1 0 010-2z" fill="currentColor"></path></svg></span>
                    <div className="css-1lmrfbf"><div className="css-aivj5c j-text j-text-body-xs" style={{ colorText: 'var(--color-primary-grey-100)' }}><b>Credit/Debit/ATM Card</b></div>
                    </div>
                </div>
                <div className="css-aivj5c j-text j-text-body-xs px-5 mb-1 pb-4 mx-4" style={{ color: "red" }}><b>Not Available For Recharge</b></div>

                <div className="css-jl6x1l pt-3 px-2" >
                    <span style={{
                        width: '39px', marginRight: '12px', fontSize: '16px', /* height: '72px', */
                        padding: '6px', borderRadius: '50%', color: '#0f3cc9', background: '#c1c8df', justifyContent: 'space-evenly', WebkitBoxAlign: 'center', alignItems: 'center'
                    }}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 19h-2v-9h1a2 2 0 00.79-3.84l-7-3a2.06 2.06 0 00-1.58 0l-7 3A2 2 0 005 10h1v9H4a1 1 0 000 2h16a1 1 0 100-2zm-4 0h-3v-9h3v9zm-8-9h3v9H8v-9z" fill="currentColor"></path></svg>
                    </span>
                    <div className="css-1lmrfbf"><div className="css-aivj5c j-text j-text-body-xs" style={{ colorText: 'var(--color-primary-grey-100)' }}><b>Netbanking</b></div></div>
                </div>
                <div className="css-aivj5c j-text j-text-body-xs px-5 mb-1 pb-4 mx-4" style={{ color: "red" }}><b>Not Available For Recharge</b></div>
            </div>
        </div>
        {/* {products?.upi !== null && products?.upi !== "" &&
            <div className="mt-5 pt-5">
                <div className="card py-1 my-3" style={{ width: "100%" }} >
                    <h1 style={{ textAlign: "center", fontSize: 18 }} className="py-3">  Pay ₹ {value} using UPI
                    </h1>
                    <a className="py-2 px-3" style={{ width: "100%" }} href={payment.trim()}>
                        {products.Gpay &&
                            <a href={payment.trim()}
                                id="divgpay"
                                className={`form-check available-method my-2 ${activeTab === 2 && "active"}`}
                                pay-type="gpay"
                                onClick={() => handleTabClick(2)}
                            >
                                <label className="form-check-label">
                                    <svg width="30" height="30" viewBox="15 -10 225 250" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <g>
                                            <path d="M232.503966,42.1689673 C207.253909,27.593266 174.966113,36.2544206 160.374443,61.5045895 L123.592187,125.222113 C112.948983,143.621675 126.650534,150.051007 141.928772,159.211427 L177.322148,179.639204 C189.30756,186.552676 204.616725,182.448452 211.530197,170.478784 L249.342585,104.997327 C262.045492,82.993425 254.507868,54.8722676 232.503966,42.1689673 Z" fill="#EA4335"></path>
                                            <path d="M190.884248,68.541767 L155.490872,48.1141593 C135.952653,37.2682465 124.888287,36.5503588 116.866523,49.3002175 L64.6660169,139.704135 C50.0900907,164.938447 58.7669334,197.211061 84.0012455,211.755499 C106.005147,224.458406 134.126867,216.920782 146.829774,194.91688 L200.029486,102.764998 C206.973884,90.7801476 202.869661,75.4552386 190.884248,68.541767 Z" fill="#FBBC04"></path>
                                            <path d="M197.696506,22.068674 L172.836685,7.71148235 C145.33968,-8.15950938 110.180221,1.25070674 94.3093189,28.7478917 L46.9771448,110.724347 C39.9857947,122.818845 44.1369141,138.299511 56.2315252,145.275398 L84.0720952,161.34929 C97.8203166,169.292894 115.392174,164.5797 123.335778,150.830917 L177.409304,57.1816314 C188.614245,37.7835939 213.411651,31.1355838 232.809294,42.3404686 L197.696506,22.068674 Z" fill="#34A853"></path>
                                            <path d="M101.033296,52.202526 L74.1604429,36.7216914 C62.1750303,29.8240204 46.8660906,33.9126683 39.9527877,45.8666484 L7.71149357,101.579108 C-8.15952065,128.997954 1.25071234,164.079816 28.7479029,179.904047 L49.2069432,191.685907 L74.0198681,205.980684 L84.7879024,212.176099 C65.670846,199.37985 59.6002612,173.739558 71.2887797,153.545698 L79.6378018,139.126091 L110.20946,86.3008703 C117.107187,74.3784352 113.002964,59.1001971 101.033296,52.202526 Z" fill="#4285F4"></path>
                                        </g>
                                    </svg>
                                    <span className="unaviablee">Google Pay</span>
                                </label>
                            </a>
                        }
                        {products.Phonepe &&
                            <a href={payment.trim()}
                                id="divphonepe"
                                className={`form-check available-method  my-2 ${activeTab === 3 && "active"}`}
                                pay-type="phonepe"
                                onClick={() => handleTabClick(3)}
                            >
                                <label className="form-check-label">
                                    <svg height="30" viewBox="0 0 700 700" width="30" xmlns="http://www.w3.org/2000/svg"><circle cx="339.53" cy="339.53" fill="#5f259f" r="339.46" /><path d="m493.6 250.94c0-13.27-11.38-24.65-24.65-24.65h-45.51l-104.3-119.47c-9.48-11.38-24.65-15.17-39.82-11.38l-36.03 11.38c-5.69 1.9-7.59 9.48-3.79 13.27l113.78 108.1h-172.59c-5.69 0-9.48 3.79-9.48 9.48v18.96c0 13.27 11.38 24.65 24.65 24.65h26.55v91.03c0 68.27 36.03 108.1 96.72 108.1 18.96 0 34.14-1.9 53.1-9.48v60.69c0 17.07 13.27 30.34 30.34 30.34h26.55c5.69 0 11.38-5.69 11.38-11.38v-271.19h43.62c5.69 0 9.48-3.79 9.48-9.48zm-121.37 163.09c-11.38 5.69-26.55 7.59-37.93 7.59-30.34 0-45.51-15.17-45.51-49.31v-91.03h83.44z" fill="#fff" /></svg>
                                    <span className="unaviablee">PhonePe</span>
                                </label>
                            </a>}
                        {products.Paytm &&
                            <a href={payment.trim()} id="divpaytm"
                                className={`form-check available-method  my-2  ${activeTab === 4 && "active"}`} pay-type="paytm"
                                onClick={() => handleTabClick(4)}>
                                <label className="form-check-label">
                                    <img
                                        src={"/uploads/Paytm-Logo.png"}
                                        className="pay-logo"
                                        alt="button"
                                        style={{ maxWidth: 45 }}
                                    />
                                    <span className="unaviablee mx-4">Paytm</span>
                                </label>
                            </a>}
                        {products.Bhim &&
                            <a href={payment.trim()}
                                id="divbhimupi"
                                className={`form-check available-method  my-2  ${activeTab === 1 && "active"}`}
                                pay-type="bhim_upi"
                                onClick={() => handleTabClick(1)}
                            >
                                <label className="form-check-label py-2">
                                    <img
                                        src={"/uploads/images.png"}
                                        className="pay-logo"
                                        alt="button"
                                        style={{ maxWidth: 45 }}
                                    />
                                    <span className="unaviablee mx-4">BHIM UPI</span>
                                </label>
                            </a>}
                    </a>
                    <div className="mt-5">
                        <img src="/uploads/secured.20c7b7cea9439246796c.jpg" alt="" className="img-fluid" />
                        <img src="/uploads/lasttwo.bfe814c92613f117536e.jpg" alt="" className="img-fluid" />
                    </div>
                </div>

            </div>} */}
    </>
    );
};


export default Payments
