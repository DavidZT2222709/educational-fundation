import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { motion } from "framer-motion";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "1rem",
  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
};

const sedes = [
  {
    id: 1,
    nombre: "Sede Principal",
    direccion: "Cll. 93 #7g-48, Las Malvinas",
    telefono: "(+57) 607 1234567",
    position: { lat: 10.95170186384476, lng: -74.82509816079254 },
    icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  },
  {
    id: 2,
    nombre: "Sede Soledad (Los Robles)",
    direccion: "Cll. 15 sur, #48-63, Los Robles",
    telefono: "(+57) 607 1122334",
    position: { lat: 10.922783664977237, lng: -74.80748617575358 },
    icon: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
  },
  {
    id: 3,
    nombre: "Sede Soledad (Los Robles)",
    direccion: "Cll. 15 sur, #48-63, Los Robles",
    telefono: "(+57) 607 1122334",
    position: { lat: 10.922783664977237, lng: -74.80748617575358 },
    icon: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
  },
];

const Mapa = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedSede, setSelectedSede] = useState(null);
  const [center, setCenter] = useState(sedes[0].position);
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef(null);

  // Al cargar el mapa
  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  // Al hacer clic en un botón de sede
  const handleClickSede = (sede) => {
    setSelectedSede(sede);
    setCenter(sede.position);
    setZoom(15); // pequeño zoom in
    if (mapRef.current) {
      mapRef.current.panTo(sede.position);
      mapRef.current.setZoom(15);
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 items-start justify-center p-6 bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Columna izquierda: Mapa */}
      <motion.div
        className="w-full md:w-2/3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              disableDefaultUI: false,
              zoomControl: true,
              gestureHandling: "greedy",
              mapTypeControl: false,
            }}
          >
            {sedes.map((sede) => (
              <Marker
                key={sede.id}
                position={sede.position}
                title={sede.nombre}
                icon={sede.icon}
                onClick={() => {
                  setSelectedSede(sede);
                  setCenter(sede.position);
                  setZoom(15);
                }}
                animation={window.google.maps.Animation.DROP}
              />
            ))}

            {/* InfoWindow al seleccionar sede */}
            {selectedSede && (
              <InfoWindow
                position={selectedSede.position}
                onCloseClick={() => setSelectedSede(null)}
              >
                <div className="text-gray-800">
                  <h3 className="font-semibold text-lg text-blue-700 mb-1">
                    {selectedSede.nombre}
                  </h3>
                  <p className="text-sm">{selectedSede.direccion}</p>
                  <p className="text-sm">{selectedSede.telefono}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <p className="text-gray-500">Cargando mapa...</p>
        )}
      </motion.div>

      {/* Columna derecha: Botones e información */}
      <motion.div
        className="w-full md:w-1/3 flex flex-col items-start justify-center gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Nuestras Sedes</h2>

        {/* Animación secuencial de botones */}
        <motion.div
          className="flex flex-col w-full gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {sedes.map((sede) => (
            <motion.button
              key={sede.id}
              onClick={() => handleClickSede(sede)}
              className={`w-full text-left px-5 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 ${
                selectedSede?.id === sede.id
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border border-blue-300"
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="font-semibold">{sede.nombre}</h4>
              <p className="text-sm opacity-80">{sede.direccion}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Tarjeta informativa con animación */}
        {selectedSede && (
          <motion.div
            key={selectedSede.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-xl shadow-inner"
          >
            <h3 className="font-bold mb-1">{selectedSede.nombre}</h3>
            <p className="text-sm">{selectedSede.direccion}</p>
            <p className="text-sm font-semibold mt-1">
              Tel: {selectedSede.telefono}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Mapa;
