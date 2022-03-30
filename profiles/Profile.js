import React, { useState, useEffect } from 'react'
import {
  Button,
  StylesProvider,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { useParams, useLocation } from 'react-router-dom'
import CircularStatic from '../commons/CircularProgressWithLabel'
import './Profile.css'
import chef from '../images/chef_.jpg'

function Profile({ account }) {
  const { recipeId } = useParams()
  const [loading, setLoading] = useState(false)
  const [nfts, setNfts] = useState([])
  const [data, setData] = useState({})
  const { state = {} } = useLocation()

  const covalentNfts = async () => {
    const covalentAPI = 'ckey_d4115699196e4d238fa138e180c'
    const chefContractAddress = '0x1a2FCb5F2704f1fF8eFF26668f63D001b42bF80B'
    try {
      const nfts = await fetch(
        `https://api.covalenthq.com/v1/80001/tokens/${chefContractAddress}/nft_token_ids/?quote-currency=USD&format=JSON&key=${covalentAPI}`,
      )
      const allNFTS = await nfts.json()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    covalentNfts()
  }, [])

  useEffect(() => {
    const getImage = (ipfsURL) => {
      if (!ipfsURL) return
      ipfsURL = ipfsURL.split('://')
      return 'https://ipfs.io/ipfs/' + ipfsURL[1]
    }

    const getMetadata = async () => {
      let data = await fetch(`https://ipfs.io/ipfs/${recipeId}/metadata.json`)
      data = await data.json()
      const dataArray = data.description.split(',')
      data.creator = dataArray[0]
      data.type = dataArray[1]
      data.intro = dataArray[2]
      data.image = getImage(data.image)
      setData(data)
    }
    if (recipeId) {
      getMetadata()
      getImage()
    }
  }, [recipeId, account])

  return (
    <StylesProvider injectFirst>
      <Container style={{ paddingTop: '1rem' }}>
        <img src={chef} alt="profile" className="profile-img" />
        <h2>{state?.recipe?.creator}</h2>
        <Button variant="contained" className="connect-wallet-btn">
          + Follow
        </Button>
        <h3>NFTs from Covalent API</h3>

        {loading ? (
          <CircularStatic />
        ) : (
          <div>
            {nfts && nfts.length ? (
              nfts.map((project, index) => (
                <Card className="card-padding" key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} md={2}>
                      <img
                        className="nft-img"
                        src={project.external_data.image}
                        alt="nft"
                      />
                    </Grid>
                    <Grid item xs={8} md={10} className="nft-col2">
                      <div className="container-flex">
                        <h2 className="inner2">{project.external_data.name}</h2>
                        <p className="info">
                          TokenId: <strong>{project.token_id}</strong>
                        </p>
                      </div>

                      <p className="info">
                        <strong>Token Balance: </strong>
                        {project.token_balance}
                      </p>
                      <p className="info">
                        <strong>Tokens supported: </strong>
                        {project.supports_erc.length > 0 ? (
                          project.supports_erc.map((index) => (
                            <span>{index}, </span>
                          ))
                        ) : (
                          <p>ERC20</p>
                        )}
                      </p>
                      <p className="info">
                        <strong>Owner: </strong>
                        {project.owner}
                      </p>
                      <p className="info">
                        <strong>Original owner: </strong>
                        {project.original_owner}
                      </p>
                      <p className="info">
                        <strong>Desc: </strong>
                        {project.external_data.description}
                      </p>
                    </Grid>
                  </Grid>
                </Card>
              ))
            ) : (
              <h2>No NFTs Yet...</h2>
            )}
          </div>
        )}

        <Grid container>
          {nfts && nfts.length ? (
            nfts.map((nft, index) => (
              <Grid item md={3} className="swap-card" key={index}>
                <Card sx={{ maxWidth: 235, border: `` }}>
                  <CardMedia
                    component="img"
                    height="184"
                    image="https://avatars.githubusercontent.com/u/38871879?v=4"
                    // image={}
                    alt="Paella dish"
                  />
                  <CardContent
                    style={{
                      borderTop: `0px solid rgb(38 37 181 / 35%)`,
                    }}
                  >
                    <p className="info">
                      Token id: <strong>{nft.token_id}</strong>
                    </p>
                    <p className="info">
                      Contract Name: <strong>{nft.contract_name}</strong>
                    </p>
                    <p className="info">
                      Description:
                      <strong>{nft.external_data.description}</strong>
                    </p>
                    <p className="info">
                      Create At: <strong>{nft.createAt}</strong>
                    </p>
                    <p className="info">
                      Period: <strong>{nft.locked} seconds</strong>
                    </p>
                    <p className="info">
                      Amount: <strong>{nft.amount}</strong>
                    </p>
                    <p className="info">
                      Level: <strong>{'Diamond Hands'}</strong>
                    </p>
                    <br />
                    <Button
                      variant="contained"
                      size="small"
                      // component={Link}
                      style={{
                        fontSize: '0.7125rem',
                        backgroundColor: '#9a21b8',
                        color: 'white',
                      }}
                      // to={`/rewards`}
                      // onClick={checkRewards}
                    >
                      Check rewards
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <h2>No NFTS Yet...</h2>
          )}
        </Grid>
      </Container>
    </StylesProvider>
  )
}

export default Profile
