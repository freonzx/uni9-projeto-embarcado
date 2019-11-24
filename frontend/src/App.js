import React, { useState, useEffect } from 'react'
import Container from './components/Container'
import Logo from './assets/images/uninove.png'
import { Form, SubmitButton, Nota, Loading, InLine } from './styles'
import api from './services/api'
import { IoMdSad, IoMdHappy } from 'react-icons/io'

function App() {
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [studytime, setStudy] = useState('')
    const [fail, setFail] = useState('')
    const [absences, setAbsences] = useState('')
    const [response, setResponse] = useState('')
    const [load, setLoad] = useState(true)

    useEffect(() => {
        // Função disparada apenas para acordar API no Heroku
        async function loadAPI() {
            await api.post('/prediction', {
                n1: 0,
                n2: 0,
                studytime: 0,
                failures: 0,
                absences: 0,
            })
            setLoad(false)
        }
        loadAPI()
    }, [])

    const handleInputMax = (input, maxValue, value) => {
        if (value > maxValue || value < 0) {
            return
        } else {
            input(value)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await api.post('prediction', {
            n1,
            n2,
            studytime,
            failures: fail,
            absences,
        })

        setResponse(res.data.prediction)
    }

    return (
        <>
            <Container>
                <div className='center'>
                    <img src={Logo} alt='uni9' />
                </div>
                <h1>Projeto de Sistemas Inteligentes e Embarcados</h1>
                <InLine>
                    <h3>Status da API:</h3>
                    {load ? (
                        <p>
                            Carregando... <Loading />
                        </p>
                    ) : (
                        <h3 style={{ color: 'green', marginLeft: '4px' }}>
                            Online
                        </h3>
                    )}
                </InLine>
                <Form onSubmit={handleSubmit}>
                    <label>
                        Primeira Nota <span>(Valor númerico de 0 a 20)</span>
                    </label>
                    <input
                        type='number'
                        required
                        value={n1}
                        onChange={e =>
                            handleInputMax(setN1, 20, e.target.value)
                        }
                    ></input>
                    <label>
                        Segunda Nota <span>(Valor númerico de 0 a 20)</span>
                    </label>
                    <input
                        type='number'
                        required
                        value={n2}
                        onChange={e =>
                            handleInputMax(setN2, 20, e.target.value)
                        }
                    ></input>
                    <label>
                        Horas de Estudo{' '}
                        <span>
                            (
                            {
                                '1 - menos de 2 horas, 2 -  entre 2 e 5 horas, 3 - entre 5 e 10 horas, 4 - mais que 10 horas'
                            }
                            )
                        </span>
                    </label>
                    <input
                        type='number'
                        required
                        value={studytime}
                        onChange={e =>
                            handleInputMax(setStudy, 4, e.target.value)
                        }
                    ></input>
                    <label>
                        Reprovações <span>(Valor númerico de 0 a 3)</span>
                    </label>
                    <input
                        type='number'
                        required
                        value={fail}
                        onChange={e =>
                            handleInputMax(setFail, 3, e.target.value)
                        }
                    ></input>
                    <label>
                        Faltas <span>(Valor númerico de 0 a 93)</span>
                    </label>
                    <input
                        type='number'
                        required
                        value={absences}
                        onChange={e =>
                            handleInputMax(setAbsences, 93, e.target.value)
                        }
                    ></input>
                    {response && (
                        <Nota nota={Math.ceil(response)}>
                            {Math.ceil(response) >= 8 ? (
                                <IoMdHappy></IoMdHappy>
                            ) : (
                                <IoMdSad></IoMdSad>
                            )}
                            <h2>Sua nota prevista é {Math.ceil(response)}</h2>
                        </Nota>
                    )}
                    <SubmitButton loading={load}>
                        Consultar Previsão
                    </SubmitButton>
                </Form>
            </Container>
        </>
    )
}

export default App
