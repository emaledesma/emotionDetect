import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { FormGroup, Label, Input, Spinner } from "reactstrap";
import {useDispatch, useSelector} from 'react-redux';
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  Row,
  Col,
  BlockBetween,
  BlockDes,
  PreviewCard,
  OverlineTitle,
} from "../components/Component";
import { guardandoDatosUsuario_accion } from "../Redux/DatosIniciales/AccionesDatosIniciales";

const DatosPersonales = () => {
 const dispatch = useDispatch();
 const {isDatosUsuarios} = useSelector(state => state.storeDatosIniciales);
 const [flagGuardar, setflagGuardar] = useState(false);
 const [datosCargados, setDatosCargados] = useState({});
 
 const guardarDatos = () =>{
     setflagGuardar(true)
     if(Object.keys(datosCargados).length === 5){
         dispatch(guardandoDatosUsuario_accion(datosCargados));
    }
  }
  const escucharCambios = (name, value) =>{
    setDatosCargados({...datosCargados, [name]: value});
  }
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                UX-Detector
              </BlockTitle>
              <BlockDes className="text-soft"><p>Cargue sus datos perosnales, por favor.</p></BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
                <PreviewCard>
                    <OverlineTitle tag="span" className="preview-title-lg">
                    {" "}
                    Carga de datos{" "}
                    </OverlineTitle>
                    <Row className="gy-4">
                        <Col sm="6">
                            <FormGroup>
                            <Label htmlFor="default-0" className="form-label">
                                Nombre
                            </Label>
                            <div className="form-control-wrap">
                                <input  
                                  className="form-control" 
                                  type="text" 
                                  name="nombre"
                                  value={datosCargados.nombre ? datosCargados.nombre : ''}
                                  placeholder="Inrese su Nombre" 
                                  onChange={e => escucharCambios(e.target.name, e.target.value)}
                                />
                                {flagGuardar && !datosCargados.nombre && <p className="invalid">es un campo requerido</p>}
                            </div>
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                            <Label htmlFor="default-1" className="form-label">
                                DNI
                            </Label>
                            <div className="form-control-wrap">
                                <input 
                                    className="form-control" 
                                    type="number" 
                                    name="dni"
                                    value={datosCargados.dni ? datosCargados.dni : ''}
                                    onChange={e => escucharCambios(e.target.name, e.target.value)}
                                    placeholder="Inrese su dni sin puntos" 
                                />
                                  {flagGuardar && !datosCargados.dni && <p className="invalid">es un campo requerido</p>}
                            </div>
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                            <Label htmlFor="default-1" className="form-label">
                                Edad
                            </Label>
                            <div className="form-control-wrap">
                                <input 
                                    className="form-control" 
                                    type="number" 
                                    name="edad"
                                    value={datosCargados.edad ? datosCargados.edad : ''}
                                    onChange={e => escucharCambios(e.target.name, e.target.value)}
                                    placeholder="Inrese su edad" 
                                />
                                  {flagGuardar && !datosCargados.edad && <p className="invalid">es un campo requerido</p>}
                            </div>
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <div className="form-label-group">
                                <Label className="form-label" htmlFor="default-01">
                                    Email
                                </Label>
                                </div>
                                <div className="form-control-wrap">
                                <input
                                    type="text"
                                    // bsSize="lg"
                                    // id="default-01"
                                    // name="email"
                                    // ref={register({ required: true })}
                                    // className="form-control-lg form-control"
                                    name="email"
                                    value={datosCargados.email ? datosCargados.email : ''}
                                    onChange={e => escucharCambios(e.target.name, e.target.value)}
                                    className="form-control"
                                    placeholder="Ingrese su email"
                                />
                                {flagGuardar && !datosCargados.email && <p className="invalid">es un campo requerido</p>}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label htmlFor="default-1" className="form-label">
                                Sexo
                                </Label>
                                <div className="form-control-wrap">
                                    <div className="form-control-select">
                                        <Input  onChange={e => escucharCambios(e.target.name, e.target.value)}  type="select" name="select" id="default-4">
                                            <option value="0">Seleccione sexo</option>
                                            <option value="M">Hombre</option>
                                            <option value="F">Mujer</option>
                                            <option value="N">Prefiero no decirlo</option>
                                        </Input>
                                 {flagGuardar && !datosCargados.select && <p className="invalid">es un campo requerido</p>}
                                    </div>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Button onClick={()=>guardarDatos()} type="button" color="primary" size="lg" className="btn-block">
                                {isDatosUsuarios.isMostrar ? <Spinner size="sm" color="light" /> : "Guardar"}
                                </Button>
                            </FormGroup>
                        </Col>                 
                    </Row>
                </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default DatosPersonales;
