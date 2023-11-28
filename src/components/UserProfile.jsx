import { Avatar, Box, Grid, Skeleton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import BusinessIcon from "@mui/icons-material/Business";
import React from "react";
import moment from "moment";

import { useSelector } from "react-redux";

const UserProfile = () => {
  const { isLoading, userData } = useSelector((state) => state.githubReducer);

  return isLoading || userData ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container backgroundColor={"#1f2a48"} borderRadius={3} p={3} mt={2}>
        <Grid item xs={4} md={2}>
          {!isLoading ? (
            <Avatar src={userData?.avatar_url} sx={{ width: 70, height: 70 }} />
          ) : (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          )}
        </Grid>
        <Grid item xs={8} md={10}>
          {!isLoading ? (
            <>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color={userData.name ? "#fff" : "grey"}
                  >
                    {userData.name ? userData.name : "Not Available"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color={"grey"}>
                    {userData.created_at
                      ? `Joined ${moment(userData?.created_at).format("ll")}`
                      : "Not Available"}
                  </Typography>
                </Grid>
              </Grid>
              <Typography color={"#0000cc"}>
                {userData.login ? `@${userData.login}` : ""}
              </Typography>
              <Typography color={"grey"} my={2}>
                {userData.bio ? userData.bio : "This profile has no bio."}
              </Typography>
            </>
          ) : (
            <>
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
              <Skeleton
                animation="wave"
                height={10}
                width="40%"
                style={{ marginBottom: 6 }}
              />
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            </>
          )}
          {!isLoading ? (
            <Grid
              container
              spacing={2}
              pb={2}
              backgroundColor={"#00061a"}
              my={2}
              color={"#f2f2f3"}
              borderRadius={3}
            >
              <Grid item sx={4} md={4}>
                <Typography fontWeight={100}>Repos</Typography>
                <Typography fontWeight={700} color={userData.public_repos ? "#fff" : "grey"}>
                  {userData.public_repos ? userData.public_repos : "NA"}
                </Typography>
              </Grid>
              <Grid item sx={4} md={4}>
                <Typography fontWeight={100}>Followers</Typography>
                <Typography fontWeight={700} color={userData.followers ? "#fff" : "grey"}>
                  {userData.followers ? userData.followers : "NA"}
                </Typography>
              </Grid>
              <Grid item sx={4} md={4}>
                <Typography fontWeight={100}>Following</Typography>
                <Typography fontWeight={700} color={userData.following ? "#fff" : "grey"}>
                  {userData.following ? userData.following : "NA"}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Skeleton
              sx={{ height: 90 }}
              animation="wave"
              variant="rectangular"
              style={{ marginBottom: 6 }}
            />
          )}
          {!isLoading ? (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              color={"grey"}
              fontWeight={100}
            >
              <Grid item xs={6} alignItems={"center"} justifyContent={"center"}>
                <Grid container gap={1}>
                  <Grid item>
                    <LocationOnIcon />
                  </Grid>
                  <Grid item md={10}>
                    <Typography fontSize={14}>
                      {userData.location ? userData.location : "Not Available"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} alignItems={"center"} justifyContent={"center"}>
                <Grid container gap={1}>
                  <Grid item>
                    <TwitterIcon />
                  </Grid>
                  <Grid item md={10}>
                    <Typography fontSize={14}>
                      {userData.twitter_username
                        ? `@${userData.twitter_username}`
                        : "Not Available"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} alignItems={"center"} justifyContent={"center"}>
                <Grid container gap={1}>
                  <Grid item>
                    <LinkIcon />
                  </Grid>
                  <Grid item md={10}>
                    <Typography fontSize={14}>
                      {userData.blog ? userData.blog : "Not Available"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} alignItems={"center"} justifyContent={"center"}>
                <Grid container gap={1}>
                  <Grid item>
                    <BusinessIcon />
                  </Grid>
                  <Grid item md={10}>
                    <Typography fontSize={14}>
                      {userData.company ? userData.company : "Not Available"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <>
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="40%" />
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  ) : null;
};

export default UserProfile;
