import React from 'react';
import './Card.css';
import LazyLoad from 'react-lazy-load';

export const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="image">
                <LazyLoad height={762} offsetVertical={300}>
                    {data.links.mission_patch_small ? <img src={data.links.mission_patch_small} alt={data.mission_name} /> : null}
                </LazyLoad>
            </div>
            <div className="content">
                <div className="mission-name">
                    {data.mission_name ? data.mission_name : null}
                    {data.flight_number ? ` #${data.flight_number}` : null}
                </div>

                <div className="usp">
                    <span className="left">Mission Ids: </span><br />
                    <ul className="right">{data.mission_id.map((id, index) => (<li key={index}>${id}</li>))}</ul>
                </div>

                <div className="usp">
                    <span className="left">Launch Year: </span>
                    <span className="right"> {data.launch_year ? data.launch_year : null}</span>
                </div>

                <div className="usp">
                    <span className="left">Successful Launch: </span>
                    <span className="right">{data.launch_success ? data.launch_success.toString() : 'false'}</span>
                </div>

                {data.rocket.first_stage.cores[0].land_success ?
                    <div className="usp">
                        <span className="left">Successful Landing: </span>
                        <span className="right">{data.rocket.first_stage.cores[0].land_success.toString()}</span>
                    </div>
                    : null}
            </div>
        </div>
    )
}