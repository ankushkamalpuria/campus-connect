import React from 'react';
import { MapPin, Briefcase, Tag, ExternalLink } from 'lucide-react';
import './InternshipCard.css';

const InternshipCard = ({ data }) => {
    return (
        <div className="card glass fade-in">
            <div className="card-header">
                {data.logo ? (
                    <img src={data.logo} alt={`${data.company} logo`} className="company-logo" />
                ) : (
                    <div className="company-logo-placeholder">{data.company[0]}</div>
                )}
                <div style={{ flex: 1 }}>
                    <h3 className="company-name">{data.company}</h3>
                    <p className="role">{data.role}</p>
                </div>
            </div>

            <div className="card-body">
                <div className="info-row">
                    <MapPin size={16} className="icon-sm" />
                    <span>{data.location}</span>
                </div>

                <div className="tags">
                    <span className="tag type">
                        <Briefcase size={12} style={{ marginRight: 4 }} />
                        {data.type}
                    </span>
                    <span className="tag category">
                        <Tag size={12} style={{ marginRight: 4 }} />
                        {data.category}
                    </span>
                </div>
            </div>

            <div className="card-footer">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="btn btn-full">
                    Apply Now <ExternalLink size={16} style={{ marginLeft: 8 }} />
                </a>
            </div>
        </div>
    );
};

export default InternshipCard;
