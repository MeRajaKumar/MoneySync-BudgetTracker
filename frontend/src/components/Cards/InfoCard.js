import React from "react";

const InfoCard = (
    <InfoCard
                icon={<IoMdCard />}
                label="Total Balance"
                value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
                color="bg-primary"
                />
) =>{
    return (
        <div>InfoCard</div>
    )
}

export default InfoCard;