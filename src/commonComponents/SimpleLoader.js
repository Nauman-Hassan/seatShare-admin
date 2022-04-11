import { RotateSpinner } from 'react-spinners-kit';

import React from 'react'

// use SIZE and COLOR props for change in size and color

export default function SimpleLoader({ size, color }) {

    const styles = {
        main: {
            zIndex: 1,
            padding: '100vh 100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // background: 'rgba(255,255,255,0.8)',
            // background: 'rgba(255,255,255,0.6)',
        }
    }

    return (
        <div style={styles.main}>
            <RotateSpinner color={color} size={size} />
        </div>
    )
}