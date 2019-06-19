export const xmlRequestTemplate = ({ owsUrl, layerName }) => `
  <wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">
    <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">ri2de_calc_custom</ows:Identifier>
    <wps:DataInputs>
        <wps:Input>
          <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">roads_identifier</ows:Identifier>
          <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">roads_identifier</ows:Title>
          <wps:Data>
              <wps:LiteralData>roads</wps:LiteralData>
          </wps:Data>
        </wps:Input>
        <wps:Input>
          <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">layers_setup</ows:Identifier>
          <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">layers_setup</ows:Title>
          <wps:Data>
              <wps:LiteralData>
            {
                "classes": [],
                "layername": "${layerName}",
                "owsurl": "${owsUrl}"
              }
            </wps:LiteralData>
          </wps:Data>
        </wps:Input>
    </wps:DataInputs>
    <wps:ResponseForm>
        <wps:RawDataOutput mimeType="application/json">
          <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">output_json</ows:Identifier>
        </wps:RawDataOutput>
    </wps:ResponseForm>
  </wps:Execute>
`
