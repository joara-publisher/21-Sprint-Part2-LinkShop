import { useState, useEffect, useRef } from 'react';

function useImagePreview({ shopImage }) {
  const previewRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
        previewRef.current = null;
        }
      
        if (shopImage) {
          previewRef.current = URL.createObjectURL(shopImage);
          setPreviewUrl(previewRef.current);
        } else {
          setPreviewUrl(null);
        }
  
        return () => {
          if (previewRef.current) {
            URL.revokeObjectURL(previewRef.current);
            previewRef.current = null;
          }
        };
    }, [shopImage]);

  return previewUrl;
}

export default useImagePreview;