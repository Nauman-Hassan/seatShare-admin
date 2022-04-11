import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Dashboard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import logo from "../../assets/mainLogo/logo.png"

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DescriptionIcon from '@mui/icons-material/Description';

import { BiBlock } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { MdOutlineGppGood } from "react-icons/md";

import {UseDashboard} from "./UseDashboard"
import SimpleLoader from '../../commonComponents/SimpleLoader';
import DashboardLoader from '../../commonComponents/DashboardLoader';


function Dashboard(){
    const [
      allDashboard,
      userLoading,
      activeUserLoading,
      tempUserLoading,
      permUserLoading,
      adsLoading,
      activeAdsLoading,
      tempAdsLoading,
      permAdsLoading,
    ] = UseDashboard();
    return(
        <>
            <div className='dashboardcolor'>
                
                <Container>
                    <Typography className='Typo-welcome Typo-Admin' variant='h6'>
                        Admin Dashboard
                        <Typography className='Typo-welcome'>
                        {/* Welcome Back&nbsp; <span className='adminsName'>Admin 😀 */}
                        
              
            
                        {/* </span> */}
                        <Typography className='Typo-welcome' style={{ textAlign: "right" }}>
                    {/* Date : {new Date().toISOString().split("T")[0]} &nbsp; */}
                        
                    </Typography>
                        
                    </Typography>
                    
                        
                    </Typography>

                    
                    
                    
                    
                </Container>
                
                <br />
                <Container>
                    <Divider />
                </Container>
                <br />
                <div className='main-card'>
                    <Container>
                        <Grid container spacing={3}>

                            
                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                        <SupervisorAccountIcon className='cardImg' />
                                        {
                                            userLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tUser}</Typography></CardContent>
                                                
                                            )
                                        }
                                        
                                                   
                                        <CardContent><Typography variant='h6' className="three-white-type-color">Total Users</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                    <MdOutlineGppGood className='cardImg' />
                                         {
                                            activeUserLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tActiveUser}</Typography></CardContent>
                                                
                                            )
                                        }
                                                    
                                        <CardContent><Typography variant='h6' className="three-white-type-color">Active Users</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                    <BiBlock className='cardImg' />
                                         {
                                            tempUserLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                 <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tTempUser}</Typography></CardContent>
                                                
                                            )
                                        }
                                                   
                                        <CardContent><Typography variant='h6' className="three-white-type-color smallTextSize">Temp Block Users</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                    <VscError className='cardImg' />
                                         {
                                            permUserLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tPermUser}</Typography></CardContent>
                                                
                                            )
                                        }
                                                   
                                        <CardContent><Typography variant='h6' className="three-white-type-color smallTextSize">Perm Block Users</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                        <DescriptionIcon className='cardImg' />
                                         {
                                            adsLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                 <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tAds}</Typography></CardContent>
                                                
                                            )
                                        }
                                                   
                                        <CardContent><Typography variant='h6' className="three-white-type-color">Total Ads</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                    <MdOutlineGppGood className='cardImg' />
                                         {
                                            activeAdsLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tActiveAds}</Typography></CardContent>
                                                
                                            )
                                        }
                                                    
                                        <CardContent><Typography variant='h6' className="three-white-type-color">Active Ads</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                    <BiBlock className='cardImg' />
                                         {
                                            tempAdsLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tTempAds}</Typography></CardContent>
                                                
                                            )
                                        }
                                                    
                                        <CardContent><Typography variant='h6' className="three-white-type-color">Temp Block Ads</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>


                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                                {/* <Link to='/students' className='cardLink'> */}
                                    <Card variant='outlined' className='sub-card-student zoom'>
                                    <VscError className='cardImg' />
                                         {
                                            permAdsLoading ? (
                                                <DashboardLoader color={"white"} size={50}/>
                                            ): (
                                                <CardContent><Typography variant='h4' className='three-white-type-color'>{allDashboard.tPermAds}</Typography></CardContent>
                                                
                                            )
                                        }
                                                    
                                        <CardContent><Typography variant='h6' className="three-white-type-color">Perm Block Ads</Typography></CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>

                            
                           
                        </Grid>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Dashboard