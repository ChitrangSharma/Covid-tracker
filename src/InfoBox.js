import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
        <CardContent>
            {/* Title i.e Coronavirus cases */}
            <Typography className="infoBox__title" color="textSecondary">
                {title}
            </Typography>
            <h2 className="infoBox__cases">{cases}</h2>
            {/* +123k number of cases */}
            <Typography className="infoBox__total"color="textSecondary">
                {total} Total
            </Typography>
            {/* 1M total */}
        </CardContent>
        </Card>
    )
}

export default InfoBox
