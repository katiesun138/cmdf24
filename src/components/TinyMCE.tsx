import React, { ChangeEvent } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Input } from '@chakra-ui/react';

interface Props {
  onClick: (desc: string, title: string) => void; // Define the type of the prop
}
let contentOutput: string;
let titleOutput: string;

const MyEditor: React.FC<Props> = ({ onClick }) => {
  const handleEditorChange = (content, editor) => {
    contentOutput = content;
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    titleOutput = event.target.value;
  };
  const handleClick = () => {
    onClick(contentOutput, titleOutput);
  };
  return (
    <>
      <Input
        variant="outline"
        borderRadius="10px"
        bg="white"
        borderColor="gray.200" // Set the border color to gray
        borderWidth="1px" // Set the border width to 1px
        color="gray.800"
        placeholder="Title"
        _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
        onChange={handleInputChange}
      />
      <Editor
        apiKey="otbou93omboff3xmdezdhk0ty9nxv45org5g34jkuiyq3q3z"
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
      <Button variant="hotpink" onClick={handleClick}>
        Add Topic
      </Button>
    </>
  );
};

export default MyEditor;
