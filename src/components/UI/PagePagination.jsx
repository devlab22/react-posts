import React from 'react'
import { Pagination, Stack, Typography, Select, FormControl, MenuItem, Box, Card } from '@mui/material'

export default function PagePagination({ totalPages = 1, page = 1, onChangePage=Function.prototype, onChangeItemsPerPage=Function.prototype, label = 'Items per Page', itemsPerPage = [10, 25, 50], limit = 10,
    styles = { p: '5px 0', position: 'sticky', bottom: 0, background: '#f5f5f5', borderRadius: '20px', border: '2px solid teal' }, stylesPagination={ size: 'large', variant: "outlined", color: "secondary"} }) {

        const [raised, setRaised] = React.useState(false)

    return (
        <Card
            sx={styles}
            raised={raised}
            onMouseOver={() => setRaised(true)}
            onMouseOut={() => setRaised(false)}
        >
            <Stack
                alignItems='center'
                justifyContent='center'
                direction='row'
                gap={1}
            >
                <Typography>
                    {label}
                </Typography>

                <FormControl>
                    <Select
                        value={limit}
                        sx={{
                            width: 'auto',
                            height: '30px',
                            boxShadow: 'none',
                            '.MuiOutlinedInput-notchedOutline': { border: 0 }
                        }}
                        onChange={(e) => onChangeItemsPerPage(e.target.value)}
                    >

                        {itemsPerPage.map(cnt => (
                            <MenuItem key={cnt} value={cnt}>{cnt}</MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e, value) => onChangePage(value)}
                    showFirstButton
                    showLastButton
                    {...stylesPagination}
                />
            </Stack>
        </Card>

    )
}
