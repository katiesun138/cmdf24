import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const MyEditor = () => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log('Content was updated:', content);
  };

  return (
    <Editor
      apiKey="otbou93omboff3xmdezdhk0ty9nxv45org5g34jkuiyq3q3z" // You can get an API key by signing up on the TinyMCE website
      initialValue=""
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default MyEditor;
