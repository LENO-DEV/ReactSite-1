import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <main>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((ele, index) => {
                                    return <Card
                                        imgsrc={ele.imgsrc}
                                        title={ele.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Service;